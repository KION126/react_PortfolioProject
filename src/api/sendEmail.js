import emailjs from '@emailjs/nodejs';

let lastClickTime = null; // 서버 메모리에 마지막 전송 시간 저장 (서버리스 환경에서는 재부팅 시 초기화됨)
const cooldownTime = 5 * 60 * 1000; // 5분 (밀리초)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, message, currentTime } = req.body;

  if (!email || !message || !currentTime) {
    return res.status(400).json({ message: '모든 필드를 채워주세요.' });
  }

  const serverTime = Date.now();

  // 마지막 전송 시간 비교
  if (lastClickTime && serverTime - lastClickTime < cooldownTime) {
    const remainingTime = cooldownTime - (serverTime - lastClickTime);
    return res.status(429).json({
      message: `타이머가 동작 중입니다. ${Math.ceil(remainingTime / 1000)}초 후 다시 시도하세요.`,
    });
  }

  // 이메일 전송
  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        user_email: email,
        message: message,
      },
      process.env.EMAILJS_PUBLIC_KEY
    );

    // 전송 성공 -> 마지막 전송 시간 갱신
    lastClickTime = serverTime;

    return res.status(200).json({ message: '이메일 전송 성공' });
  } catch (error) {
    console.error('EmailJS Error:', error);
    return res.status(500).json({ message: '이메일 전송 실패', error: error.message });
  }
}
