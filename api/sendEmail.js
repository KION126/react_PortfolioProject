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

  // 클라이언트의 IP 주소 추출 (Vercel의 경우 X-Forwarded-For 헤더 사용)
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log("IP Address:", ipAddress);  // IP 로그 추가

  const currentTime = Date.now();

  // IP별 쿨다운 시간 확인
  if (ipCooldowns[ipAddress] && currentTime - ipCooldowns[ipAddress] < cooldownTime) {
    const remainingTime = cooldownTime - (currentTime - ipCooldowns[ipAddress]);
    return res.status(429).json({
      message: `이메일 전송 쿨다운 중입니다. ${Math.ceil(remainingTime / 1000)}초 후 다시 시도해주세요.`,
    });
  }

  // 이메일 발송을 위한 transporter 설정
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Gmail을 사용하거나 다른 이메일 서비스를 설정할 수 있습니다.
    auth: {
      user: process.env.EMAIL_USER,  // 발송할 이메일 계정
      pass: process.env.EMAIL_APP_PASSWORD, // 이메일 비밀번호 또는 앱 비밀번호
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: '새로운 메시지',
    text: `보낸 사람: ${email}\n메시지 내용: ${message}`,
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
