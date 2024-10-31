import React from 'react';
import IMG_LOGO from '../../image/inhatcCinema/pj_logo.png';
import IMG_MAIN from '../../image/inhatcCinema/pj_main.png';
import IMG_CANCEL from '../../image/inhatcCinema/pj_cancel.png';
import IMG_MEMBER from '../../image/inhatcCinema/pj_member.png';
import IMG_RESER from '../../image/inhatcCinema/pj_reser.png';
import IMG_SEAT from '../../image/inhatcCinema/pj_seat.png';
import ImageSlider from '../public/ImageSlider';

const InhatcChinema = ({ windowWidth }) => {
    const keywordList = [
        '#DB서버 구축',
        '#로그인',
        '#회원가입',
        '#마이페이지',
        '#영화 포스터 리스트 전환 효과 애니메이션 구현',
    ];

    return (
        <div className='text-[18px] text-[#c1cccc] font-consolas text-nowrap'>   
            <div className={`w-full ${windowWidth <= 1360 ? 'flex flex-col' : 'flex'}`}>
                <div className='mb-8 items-center'>
                    <div className='flex'>
                        <div className='bg-[#181818] rounded-l-lg pl-5 pr-[50px] py-3'>
                            <p className='font-kr text-gray-200 text-[28px] font-bold'>영화관 예매 윈도우 애플리케이션</p>
                            <div className='text-[14px]'>
                                <p className='font-kr'>2024.5 ~ 2024.06</p>
                                <p className='font-kr text-[13px]'>팀 프로젝트</p>
                            </div>
                        </div>
                        <div className='border-l-[3px] border-dotted border-gray-700'></div>
                        <div className='flex items-center bg-[#181818] rounded-r-lg px-5 py-3'>
                            <img src={IMG_LOGO} alt="develop_logo" className='min-h-[50px] max-h-[50px] min-w-[150px] max-w-[150px]'/>
                        </div>
                    </div><br/>
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
                        <ul className='text-[16px] pl-2 leading-8'>
                            <li>- Netbeans GUI로 영화관 결제, 좌석 예매 윈도우 애플리케이션</li>
                            <li>- Text Captcha API를 적용시켜 사용자가 사람인지 컴퓨터 프로그램인지 판별, 보안강화</li>
                            <li>- 영화 포스터 리스트 전환 효과 애니메이션 구현</li>
                            <li>- 실시간 영화관 좌석 예매를 위한 DB서버 구축 및 로직 구현</li>
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
                            <li>- 왕건(본인): Text Captcha API 구현, 실시간 좌석 예매 구현, 마이페이지 구현</li>
                            <li>- 황지홍(
                                <a href="https://github.com/hwangjihong/" target="_blank" rel="noreferrer" className='text-blue-500 hover:underline'>Github</a>
                                ): DB서버 구축, 로그인, 회원가입, 영화 포스터 리스트 전환 효과 애니메이션 구현
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`flex justify-center items-start mt-[60px] w-full ${windowWidth <= 1360 ? '' : ''}`}>
                    <ImageSlider obj={[{title: '메인', img: IMG_MAIN}, {title: '로그인/회원가입', img: IMG_MEMBER}, {title: '영화예약', img: IMG_RESER}, {title: '좌석선택', img: IMG_SEAT}
                        , {title: '마이페이지', img: IMG_CANCEL}
                    ]} />
                </div>
            </div>
        </div>
    );
};

export default InhatcChinema;