import React from 'react';
import IMG_LOGO from '../../image/inhatcCinema/pj_logo.png';

const InhatcChinema = () => {
    return (
        <div className='text-[18px] text-[#c1cccc] font-consolas px-5'>
            <div className='mb-8 items-center'>
                <div className='flex bg-[#181818] rounded-lg px-2 w-fit items-center'>
                    <img src={IMG_LOGO} alt="develop_logo" className='h-[40px]'/>
                </div>
                <p className='font-kr text-gray-200 text-[24px] font-bold'>영화관 예매 윈도우 애플리케이션</p>
            </div>

            <div className='flex'>
                <div className='flex-1 border-r border-gray-500'>
                <table className='text-[14px]'><tbody>
                        <tr>
                            <td>📅</td>
                            <td>2024.5 ~ 2024.06</td>
                        </tr>
                        <tr>
                            <td className='text-center'>🧍‍♂️</td>
                            <td>2</td>
                        </tr>
                    </tbody></table><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>🔨 Technology Stack</p>
                        <p>#Java #WindowApplication #NetBeans Swing GUI</p>
                    </div><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>🔧 Flatform</p>
                        <p>#NetBeans #MySQL</p>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'>📌 Summary</p>
                        <p className='my-2 font-semibold'>실시간 좌석 예매가 가능한 영화관 예매 윈도우 애플리케이션</p>
                        <ul className='text-[16px] list-disc pl-6'>
                            <li>Netbeans GUI로 영화관 결제, 좌석 예매 윈도우 애플리케이션</li>
                            <li>Text Captcha API를 적용시켜 사용자가 사람인지 컴퓨터 프로그램인지 판별, 보안강화</li>
                            <li>영화 포스터 리스트 전환 효과 애니메이션 구현</li>
                            <li>실시간 영화관 좌석 예매를 위한 DB서버 구축 및 로직 구현<br/>
                            &nbsp;학습되지 않은 질문이나 챗봇 모델이 이해하지 못하는 질문에는 ChatGPT가 대답할 수 있도록 구현</li>
                        </ul>
                        <div className='border-l-[2px] border-yellow-300 pl-2 mt-3 text-[16px]'>
                            로그인, 회원가입, Text Captcha API, 암호화, 실시간 좌석 예매, 예매 취소
                        </div>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'>👨‍👦‍👦 Members</p>
                        <ul className='text-[16px] list-disc pl-6'>
                            <li>왕건(본인): Text Captcha API 구현, 실시간 좌석 예매 구현, 마이페이지 구현</li>
                            <li>황지홍(
                                <a href="https://github.com/hwangjihong/" target="_blank" rel="noreferrer" className='text-blue-500 hover:underline'>Github</a>
                                ): DB서버 구축, 로그인, 회원가입, 영화 포스터 리스트 전환 효과 애니메이션 구현
                            </li>
                        </ul>
                    </div><br/>
                </div>
                <div className='flex flex-1 justify-center'>
                    {/* <img src={IMG_DEVELOP_MAIN} alt="develop" className='w-[600px]'/> */}
                </div>
            </div>
        </div>
    );
};

export default InhatcChinema;