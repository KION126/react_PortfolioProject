import React from 'react';
import ImageSlider from '../public/ImageSlider';
import IMG_DEVELOP_MAIN from '../../image/onlineLecture/pj_develop_main.png';
import IMG_DEVELOP_LOGO from '../../image/onlineLecture/pj_develop_logo.png';
import IMG_ERD from '../../image/onlineLecture/pj_erd.png';
import IMG_DETAIL from '../../image/onlineLecture/pj_detail.png';
import IMG_MYPAGE from '../../image/onlineLecture/pj_mypage.png';
import IMG_LECTURE from '../../image/onlineLecture/pj_lecture.png';
import IMG_NOTICE from '../../image/onlineLecture/ph_notice.png';

const OnlineLecture = ({ windowWidth }) => {
    const keywordList = [
        '#네이버 간편 로그인',
        '#메일인증',
        '#키워드 검색',
        '#마이페이지',
        '#강의영상 시청',
        '#강의자료 다운로드',
        '#수강생 관리',
        '#강의실 관리',
        '#게시판',
        '#댓글'
    ];

    return (
        <div className='text-[18px] text-[#c1cccc] font-consolas text-nowrap'>
            <div className={`w-full ${windowWidth <= 1360 ? 'flex flex-col' : 'flex'}`}>
                <div className='mb-8 items-center'>
                    <div className='flex'>
                        <div className='bg-[#181818] rounded-l-lg pl-5 pr-[150px] py-3'>
                            <p className='font-kr text-gray-200 text-[28px] font-bold'>온라인 강의 플랫폼</p>
                            <div className='text-[14px]'>
                                <p className='font-kr'>2023.11 ~ 2023.12</p>
                                <p className='font-kr text-[13px]'>개인 프로젝트</p>
                            </div>
                        </div>
                        <div className='border-l-[3px] border-dotted border-gray-700'></div>
                        <div className='flex items-center bg-[#181818] rounded-r-lg px-5 py-3'>
                            <img src={IMG_DEVELOP_LOGO} alt="develop_logo" className='min-h-[30px] max-h-[30px] min-w-[150px] max-w-[150px]'/>
                        </div>
                    </div><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>🔨 Technology Stack</p>
                        <p className='break-words'>#JSP #MVC2 #Ajax #BootStrap #Naver API #SMTP</p>
                    </div><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>🔧 Platform</p>
                        <p className='break-words'>#Eclipse #MySQL #Tomcat</p>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'>📌 Summary</p>
                        <p className='my-2 font-semibold'>강사, 수강자, 관리자의 권한을 분명하게 나눈 사용자 중심 온라인 강의 플랫폼</p>
                        <ul className='text-[16px] pl-2 leading-8'>
                            <li>- 대규모 온라인 개방형 강좌 플랫폼 K-MOOC에서 영감</li>
                            <li>- 첫 웹 프로젝트로, 웹에서 자주 사용하는 기능을 최대한 많이 경험하기 위해 주제 선정</li>
                            <li>- 네이버 간편 로그인, 메일 인증, 암호화 등 보안에 중점</li>
                            <li>- 여러 권한을 가진 사용자의 접근 권한을 깊이 있게 구현</li>
                            <li>- 강의실 게시판 댓글 데이터를 가져오기 위한 Ajax 사용</li>
                            <li>- Model, View, Controller를 명확히 구분하여 MVC2 패턴 구성</li>
                        </ul>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'> </p>
                        <div className='flex gap-x-4 flex-wrap w-[600px]'>
                            {keywordList.map((keyword, index) => (
                                <p key={index} className='text-[16px] text-blue-400 rounded-md '>{keyword}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`flex justify-center items-start mt-[60px] w-full ${windowWidth <= 1360 ? '' : ''}`}>
                    <ImageSlider obj={[{title: '메인', img: IMG_DEVELOP_MAIN},{title: 'ERD', img: IMG_ERD},{title: '강의상세', img: IMG_DETAIL},{title: '마이페이지', img: IMG_MYPAGE},{title: '강의실', img: IMG_LECTURE},{title: '공지', img: IMG_NOTICE}]} />
                </div>
            </div>
        </div>
    );
};

export default OnlineLecture;