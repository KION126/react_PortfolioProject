import React from 'react';
import IMG_ALT from '../../image/inhatcChatbot/pj_alt.png'
import IMG_MAIN from '../../image/inhatcChatbot/pj_main.png'
import IMG_CLU from '../../image/inhatcChatbot/pj_clu.png'
import IMG_CRAWLING from '../../image/inhatcChatbot/pj_crawling.png'
import IMG_OPENAI from '../../image/inhatcChatbot/pj_openai.png'
import ImageSlider from '../public/ImageSlider';

const InhatcChatbot = ({ windowWidth }) => {
    const keywordList = [
        '#CLU를 통한 NLP(자연어 처리)구현',
        '#웹 크롤링으로 실시간 데이터 제공',
        '#생성형 AI 모델 활용',
    ];

    return (
        <div className='text-[18px] text-[#c1cccc] font-consolas text-nowrap'>   
            <div className={`w-full ${windowWidth <= 1360 ? 'flex flex-col' : 'flex'}`}>
                <div className='mb-8 items-center'>
                    <div className='flex'>
                        <div className='bg-[#181818] rounded-l-lg pl-5 pr-[150px] py-3'>
                            <p className='font-kr text-gray-200 text-[28px] font-bold'>대학교 종합정보 챗봇</p>
                            <div className='text-[14px]'>
                                <p className='font-kr'>2024.5 ~ 2024.06</p>
                                <p className='font-kr text-[13px]'>팀 프로젝트</p>
                            </div>
                        </div>
                        <div className='border-l-[3px] border-dotted border-gray-700'></div>
                        <div className='flex items-center bg-[#181818] rounded-r-lg px-5 py-3'>
                            <img src={IMG_ALT} alt="develop_logo" className='min-h-[80px] max-h-[80px] min-w-[70px] max-w-[70px]' />
                        </div>
                    </div><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>🔨 Technology Stack</p>
                        <p className='break-words'>#Csharp #MicrosoftBotFrameWo </p>
                    </div><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>🔧 Flatform</p>
                        <p>#VisualStudio #BotFrameWorkEmulator</p>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'>📌 Summary</p>
                        <p className='my-2 font-semibold'>인하공업전문대학교의 입시, 종합정보를 알려주는 챗봇</p>
                        <ul className='text-[16px] pl-2 leading-8'>
                            <li>- 인하공업전문대학교에 입학하고 싶은 고등학생들과 현재 재학생들을 위해 개발</li>
                            <li>- CLU를 사용하여 예시 질문사례 데이터를 학습 시켜 NLP(자연어 처리)를 구현</li>
                            <li>- 학교 홈페이지를 웹 크롤링하여 식당메뉴, 공지사항 등 실시간 데이터를 제공</li>
                            <li className='leading-6'>- OpenAI의 ChatGPT 3.5 Turbo모델의 API를 사용하여 학습되지 않은 질문이나 <br/>&nbsp;&nbsp;챗봇 모델이 이해하지 못하는 질문에는 ChatGPT가 대답할 수 있도록 구현</li>
                        </ul>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'> </p>
                        <div className='flex gap-x-4 flex-wrap w-[600px]'>
                            {keywordList.map((keyword, index) => (
                                <p key={index} className='text-[16px] text-blue-400 rounded-md '>{keyword}</p>
                            ))}
                        </div>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'>👨‍👦‍👦 Members</p>
                        <ul className='text-[16px] pl-2 leading-8'>
                            <li>- 왕건(본인): Microsoft Azure Bot 학습, OpenAI API연동, Emulator 디자인</li>
                            <li>- 황지홍(
                                <a href="https://github.com/hwangjihong/" target="_blank" rel="noreferrer" className='text-blue-500 hover:underline'>Github</a>
                                ): Microsoft Azure Bot 연동, 데이터 수집, 웹 크롤링, 데이터 정형화
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`flex justify-center items-start mt-[60px] w-full ${windowWidth <= 1360 ? '' : ''}`}>
                    <ImageSlider obj={[{title: '인사카드', img: IMG_MAIN}, {title: 'NLP', img: IMG_CLU}, {title: 'Web Crawling', img: IMG_CRAWLING}, {title: 'OpenAI', img: IMG_OPENAI}]} />
                </div>
            </div>
        </div>
    );
};

export default InhatcChatbot;