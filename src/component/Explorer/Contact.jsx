import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const [statusMessage, setStatusMessage] = useState(null); // 상태 메시지
    const [isSending, setIsSending] = useState(false); // 전송 상태
    const [isDisable, setIsDisable] = useState(false);
    const placeholder = '내용을 입력하세요.\n(300자 이내)';

    // 텍스트가 입력될 때마다 textarea 높이 동적으로 조정
    const handleTextareaInput = (e) => {
        const textarea = e.target;
        textarea.style.height = 'auto'; // 우선 높이를 초기화
        textarea.style.height = `${textarea.scrollHeight}px`; // 내용에 맞춰 높이 설정
    };

    // 초기화 함수
    const resetForm = () => {
        // form, input, textarea 초기화
        emailRef.current.value = '';
        messageRef.current.value = '';
        
        // 상태 초기화
        setIsSending(false);
        setStatusMessage(null);

        // textarea 높이 초기화
        if (messageRef.current) {
            messageRef.current.style.height = 'auto';
        }
    };

    // emailjs 이메일 전송 함수
    const sendEmail = async (e) => {
        e.preventDefault();
    
        setIsSending(true);
    
        const emailData = {
          email: emailRef.current.value,
          message: messageRef.current.value,
          currentTime: Date.now(), // 현재 시간을 함께 전송
        };
    
        try {
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setStatusMessage('이메일 전송 성공');
            setIsDisable(true); // 타이머 동작
            setTimeout(() => setIsDisable(false), 5 * 60 * 1000); // 5분 후 버튼 활성화
          } else {
            setStatusMessage(data.message || '이메일 전송 실패');
          }
        } catch (error) {
          console.error('Error:', error);
          setStatusMessage('서버와 연결할 수 없습니다.');
        }
    
        setIsSending(false);
      };

    return (
        <div className='text-[12px]'>
            <div className='px-4 py-2'>
                연락
            </div>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col px-2 pt-2 text-[14px]'>
                <label>이메일</label>
                <input 
                    ref={emailRef}
                    type="email" 
                    name="user_email" 
                    placeholder="회신받을 이메일을 입력하세요." 
                    className='w-full h-[26px] px-1 bg-[#313131] border border-[#3c3c3c] transition-colors whitespace-nowrap overflow-hidden text-ellipsis 
                        focus:border-[#A48ACF] focus:outline-none'
                    required
                />

                <label className='mt-3'>메시지</label>
                <textarea 
                    ref={messageRef}
                    name="message" 
                    className='w-full min-h-[50px] px-1 bg-[#313131] border border-[#3c3c3c] overflow-hidden resize-none 
                        focus:border-[#A48ACF] focus:outline-none transition-colors'
                    placeholder={placeholder}
                    onInput={handleTextareaInput}   // 텍스트 입력 시 높이 조정
                    maxLength={300} // 최대 글자 수
                    required
                />

                <input 
                    type="submit" 
                    value={isSending ? '전송 중...' : '전송'} 
                    className='mt-3 bg-[#A48ACF] text-white py-1 rounded-sm cursor-pointer 
                        disabled:bg-[#3c3c3c] hover:opacity-80'
                    disabled={isSending || isDisable} // 버튼 비활성화
                />
            </form>

            <span 
                className='px-2 cursor-pointer hover:underline'
                onClick={resetForm} // 초기화 함수 호출
            >
                초기화
            </span>

            {statusMessage && (
                <div className={`mt-4 px-2 ${statusMessage.includes('완료') ? 'text-green-500' : 'text-red-500'}`}>
                    {statusMessage}
                </div>
            )}
            
        </div>
    );
};

export default Contact;
