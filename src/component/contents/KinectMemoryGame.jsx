import React from 'react';

const KinectMemoryGame = () => {
    return (
        <div className='text-[18px] text-[#c1cccc] font-consolas px-5'>   
            <div className='mb-8 items-center'>
                <p className='font-kr text-gray-200 text-[24px] font-bold'>치매 예방 기억력 카드 게임</p>
            </div>

            <div className='flex'>
                <div className='flex-1 border-r border-gray-500'>
                    <table className='text-[14px]'><tbody>
                        <tr>
                            <td>📅</td>
                            <td>2023.10 ~ 2023.12</td>
                        </tr>
                        <tr>
                            <td className='text-center'>🧍‍♂️</td>
                            <td>2</td>
                        </tr>
                    </tbody></table><br/>
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
                        <ul className='text-[16px] list-disc pl-6'>
                            <li>고령화 사회와 치매 추정 환자수 증가 추이에 따른 치매 예방을 위한 게임 개발</li>
                            <li>Kinect Depthstream 기능을 활용하여 사용자의 손바닥을 tracking하여 WPF 가상 마우스 커서 조작</li>
                            <li>Memory 카드 뒤집기 로직 구현</li>
                            <li>인지활동 뿐만 아니라 미세한 손의 움직임을 통한 적절한 운동을 유도하여 치매 예방에 기여</li>
                        </ul>
                        <div className='border-l-[2px] border-yellow-300 pl-2 mt-3 text-[16px]'>
                            Kinect Depthstream활용 Motion Capture, Memory 카드 뒤집기 로직 구현, 점수 기록 저장
                        </div>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'>👨‍👦‍👦 Members</p>
                        <ul className='text-[16px] list-disc pl-6'>
                            <li>왕건(본인): 손바닥 tracking, WPF 가상 마우스 커서 조작, 점수 기록 저장, UI 디자인</li>
                            <li>황지홍(
                                <a href="https://github.com/hwangjihong/" target="_blank" rel="noreferrer" className='text-blue-500 hover:underline'>Github</a>
                                ): Kinect Depthstream 연동, 게임로직 구현, DB서버 구축
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

export default KinectMemoryGame;