import React from 'react';
import IMG_ALT from '../../image/inhatcChatbot/pj_alt.png'

const InhatcChatbot = () => {
    return (
        <div className='text-[18px] text-[#c1cccc] font-consolas px-5'>
            <div className='mb-8 items-center'>
                <div className='flex bg-[#181818] rounded-lg px-3 py-2 w-fit items-center'>
                    <img src={IMG_ALT} alt="develop_logo" className='h-[40px]'/>
                </div>
                <p className='font-kr text-gray-200 text-[24px] font-bold'>대학교 종합정보 챗봇</p>
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
                        <p>#Cshap #Microsoft Azure #OpenAI API #Selenium</p>
                    </div><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>🔧 Flatform</p>
                        <p>#VisualStudio #BotFrameWorkEmulator</p>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'>📌 Summary</p>
                        <p className='my-2 font-semibold'>인하공업전문대학교의 입시, 종합정보를 알려주는 챗봇</p>
                        <ul className='text-[16px] list-disc pl-6'>
                            <li>인하공업전문대학교에 입학하고 싶은 고등학생들과 현재 재학생들을 위해 개발</li>
                            <li>CLU를 사용하여 예시 질문사례 데이터를 학습 시켜 NLP(자연어 처리)를 구현</li>
                            <li>학교 홈페이지를 웹 크롤링하여 식당메뉴, 공지사항 등 실시간 데이터를 제공</li>
                            <li>OpenAI의 ChatGPT 3.5 Turbo모델의 API를 사용하여<br/>
                            &nbsp;학습되지 않은 질문이나 챗봇 모델이 이해하지 못하는 질문에는 ChatGPT가 대답할 수 있도록 구현</li>
                        </ul>
                        <div className='border-l-[2px] border-yellow-300 pl-2 mt-3 text-[16px]'>
                            CLU를 통한 NLP(자연어 처리)구현, 웹 크롤링으로 실시간 데이터 제공, 생성형 AI 모델 활용
                        </div>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'>👨‍👦‍👦 Members</p>
                        <ul className='text-[16px] list-disc pl-6'>
                            <li>왕건(본인): Microsoft Azure Bot 학습, OpenAI API연동, Emulator 디자인</li>
                            <li>황지홍(
                                <a href="https://github.com/hwangjihong/" target="_blank" rel="noreferrer" className='text-blue-500 hover:underline'>Github</a>
                                ): Microsoft Azure Bot 연동, 데이터 수집, 웹 크롤링, 데이터 정형화
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

export default InhatcChatbot;