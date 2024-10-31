import React from 'react';
import IMG_LOGO from '../../image/gganboo/pj_logo.png'
import IMG_MAIN from '../../image/gganboo/pj_main.png'
import IMG_MEMBER from '../../image/gganboo/pj_member.png'
import IMG_SIGNUP from '../../image/gganboo/pj_signup.png'
import IMG_CAL from '../../image/gganboo/pj_cal.png'
import IMG_FOLLOW from '../../image/gganboo/pj_follow.png'
import ImageSlider from '../public/ImageSlider';

const GganBoo = ({ windowWidth }) => {
    const keywordList = [
        '#TodoList',
        '#FireBase를 활용한 팔로우',
        '#팔로잉',
        '#이메일 인증',
        '#회원가입',
        '#로그인',
    ];

    return (
        <div className='text-[18px] text-[#c1cccc] font-consolas text-nowrap'>   
            <div className={`w-full ${windowWidth <= 1360 ? 'flex flex-col' : 'flex'}`}>
                <div className='mb-8 items-center'>
                    <div className='flex'>
                        <div className='bg-[#181818] rounded-lg pl-5 px-5 py-3'>
                            <p className='font-kr text-gray-200 text-[28px] font-bold'>공유 ToBoList 모바일 애플리케이션</p>
                            <div className='text-[14px]'>
                                <p className='font-kr'>2024.6 ~ 2024.6</p>
                                <p className='font-kr text-[13px]'>팀 프로젝트</p>
                            </div>
                        </div>
                        <div className='border-l-[3px] border-dotted border-gray-700'></div>
                        <div className='flex items-center bg-[#181818] rounded-r-lg px-5 py-3'>
                            <img src={IMG_LOGO} alt="develop_logo" className='min-h-[50px] max-h-[50px] min-w-[100px] max-w-[100px]'/>
                        </div>
                    </div><br/>
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
                        <ul className='text-[16px] pl-2 leading-8'>
                            <li>- Android Studio를 사용한 자신의 TodoList를 공유할 수 있는 모바일 애플리케이션</li>
                            <li>- FireBase를 활용하여 회원관리 및 이메일 인증, 팔로우 구현</li>
                            <li>- 팔로우한 다른 유저의 TodoList 캘린더를 확인</li>
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
                            <li>- 왕건(본인): FireBase를 활용한 이메일 인증, 팔로우, 팔로잉, UI 디자인</li>
                            <li>- 황지홍(
                                <a href="https://github.com/hwangjihong/" target="_blank" rel="noreferrer" className='text-blue-500 hover:underline'>Github</a>
                                ): 달력 TodoList구현, FireBase를 활용한 회원가입, 로그인
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`flex justify-center items-start mt-[60px] w-full ${windowWidth <= 1360 ? '' : ''}`}>
                    <ImageSlider obj={[{title: '로그인', img: IMG_MAIN}, {title: '회원가입', img: IMG_SIGNUP}, {title: 'ToDoList', img: IMG_CAL}, {title: '팔로우/팔로잉', img: IMG_FOLLOW}]} />
                </div>
            </div>
        </div>
    );
};

export default GganBoo;