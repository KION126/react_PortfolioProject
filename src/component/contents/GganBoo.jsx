import React from 'react';
import IMG_LOGO from '../../image/gganboo/pj_logo.png'

const GganBoo = () => {
    return (
        <div className='text-[18px] text-[#c1cccc] font-consolas px-5'>   
            <div className='mb-8 items-center'>
                <div className='flex bg-[#181818] rounded-lg px-3 py-2 w-fit items-center'>
                    <img src={IMG_LOGO} alt="develop_logo" className='h-[50px]'/>
                </div>
                <p className='font-kr text-gray-200 text-[24px] font-bold'>공유 ToDoList 모바일 애플리케이션</p>
            </div>

            <div className='flex'>
                <div className='flex-1 border-r border-gray-500'>
                    <table className='text-[14px]'><tbody>
                        <tr>
                            <td>📅</td>
                            <td>2024.6 ~ 2024.6</td>
                        </tr>
                        <tr>
                            <td className='text-center'>🧍‍♂️</td>
                            <td>2</td>
                        </tr>
                    </tbody></table><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>🔨 Technology Stack</p>
                        <p>#Java #SMTP</p>
                    </div><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>🔧 Flatform</p>
                        <p>#AndroidStudio #FireBase</p>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'>📌 Summary</p>
                        <p className='my-2 font-semibold'>자신의 ToDoList를 다른 사람과 공유할 수 있는 모바일 애플리케이션</p>
                        <ul className='text-[16px] list-disc pl-6'>
                            <li>Android Studio를 사용한 자신의 TodoList를 공유할 수 있는 모바일 애플리케이션</li>
                            <li>FireBase를 활용하여 회원관리 및 이메일 인증, 팔로우 구현</li>
                            <li>팔로우한 다른 유저의 TodoList 캘린더를 확인</li>
                        </ul>
                        <div className='border-l-[2px] border-yellow-300 pl-2 mt-3 text-[16px]'>
                            TodoList, FireBase를 활용한 팔로우, 팔로잉, 이메일 인증, 회원가입, 로그인
                        </div>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'>👨‍👦‍👦 Members</p>
                        <ul className='text-[16px] list-disc pl-6'>
                            <li>왕건(본인): FireBase를 활용한 이메일 인증, 팔로우, 팔로잉, UI 디자인</li>
                            <li>황지홍(
                                <a href="https://github.com/hwangjihong/" target="_blank" rel="noreferrer" className='text-blue-500 hover:underline'>Github</a>
                                ): 달력 TodoList구현, FireBase를 활용한 회원가입, 로그인
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

export default GganBoo;