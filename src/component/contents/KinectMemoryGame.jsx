import React from 'react';
import ImageSlider from '../public/ImageSlider';
import IMG_MAIN from '../../image/kinect/pj_main.png';
import IMG_MODE from '../../image/kinect/pj_mode.png';
import IMG_PLAY from '../../image/kinect/pj_play.png';
import IMG_RANK from '../../image/kinect/pj_rank.png';


const KinectMemoryGame = ({ windowWidth }) => {
    const keywordList = [
        '#Kinect Depthstream활용 Motion Capture',
        '#Memory 카드 뒤집기 로직 구현',
        '#점수 기록 저장',
    ];

    return (
        <div className='text-[18px] text-[#c1cccc] font-consolas text-nowrap'>   
            <div className={`w-full ${windowWidth <= 1360 ? 'flex flex-col' : 'flex'}`}>
                <div className='mb-8 items-center'>
                    <div className='flex'>
                        <div className='bg-[#181818] rounded-lg pl-5 px-5 py-3'>
                            <p className='font-kr text-gray-200 text-[28px] font-bold'>치매 예방 기억력 카드 게임</p>
                            <div className='text-[14px]'>
                                <p className='font-kr'>2023.10 ~ 2023.12</p>
                                <p className='font-kr text-[13px]'>팀 프로젝트</p>
                            </div>
                        </div>
                    </div><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>🔨 Technology Stack</p>
                        <p>#Cshap #WPF #Motion Capture #Kinect Depthstream</p>
                    </div><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>🔧 Flatform</p>
                        <p>#VisualStudio #Kinect #MySQL</p>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'>📌 Summary</p>
                        <p className='my-2 font-semibold'>강사, 수강자, 관리자의 역할을 분명하게 나눈 온라인 강의 플랫폼</p>
                        <ul className='text-[16px] pl-2 leading-8'>
                            <li>- 고령화 사회와 치매 추정 환자수 증가 추이에 따른 치매 예방을 위한 게임 개발</li>
                            <li>- Kinect Depthstream 기능을 활용, 손바닥을 tracking하여 WPF 가상 마우스 커서 조작</li>
                            <li>- Memory 카드 뒤집기 로직 구현</li>
                            <li className='leading-6'>- 인지활동 뿐만 아니라 미세한 손의 움직임을 통한 적절한 운동을 유도하여 <br/>&nbsp;&nbsp;치매 예방에 기여</li>
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
                            <li>- 왕건(본인): 손바닥 tracking, WPF 가상 마우스 커서 조작, 점수 기록 저장, UI 디자인</li>
                            <li>- 황지홍(
                                <a href="https://github.com/hwangjihong/" target="_blank" rel="noreferrer" className='text-blue-500 hover:underline'>Github</a>
                                ): Kinect Depthstream 연동, 게임로직 구현, DB서버 구축
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`flex justify-center items-start mt-[60px] w-full ${windowWidth <= 1360 ? '' : ''}`}>
                <ImageSlider obj={[{title: '메인', img: IMG_MAIN}, {title: '난이도', img: IMG_MODE}, {title: '플레이', img: IMG_PLAY}, {title: '랭킹', img: IMG_RANK}
                    ]} />
                </div>
            </div>
        </div>
    );
};

export default KinectMemoryGame;