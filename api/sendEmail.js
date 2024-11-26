import nodemailer from 'nodemailer';

// IP별 쿨다운 시간을 저장하는 객체 (서버 메모리에서 유지)
const ipCooldowns = {};
const cooldownTime = 5 * 60 * 1000; // 5분 (밀리초)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: '모든 필드를 채워주세요.' });
  }

  // 클라이언트의 IP 주소 추출
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  const currentTime = Date.now();

  // IP별 쿨다운 시간 확인
  // 전에 이 IP 주소로 이메일을 보낸 적이 있고, 쿨다운 시간 내에 요청한 경우
  if (ipCooldowns[ipAddress] && currentTime - ipCooldowns[ipAddress] < cooldownTime) {
    const remainingTime = cooldownTime - (currentTime - ipCooldowns[ipAddress]);
    return res.status(429).json({
      message: `IP에 따른 이메일 전송 쿨다운 중입니다.\n 
      ${Math.ceil(remainingTime / 1000)}초 후 다시 시도해주시거나 \n
      직접 이메일 보내주세요.`,
    });
  }

  // 이메일 발송을 위한 transporter 설정
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // gmail을 통해 나 자신에게 이메일을 보내기 위한 설정
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Wanggun's Portfolio Contact 새로운 메시지",
    text: `보낸 사람: ${email}\n메시지 내용:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);

    // 이메일 발송 후 해당 IP 주소의 마지막 전송 시간 갱신
    ipCooldowns[ipAddress] = Date.now();

    return res.status(200).json({ message: '이메일 전송 성공' });
  } catch (error) {
    console.error('Email Error:', error);
    return res.status(500).json({ message: '이메일 전송 실패', error: error.message });
  }
}
