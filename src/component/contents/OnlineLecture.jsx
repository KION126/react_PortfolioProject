import React from 'react';
import IMG_DEVELOP_MAIN from '../../image/onlineLecture/pj_develop_main.png';
import IMG_DEVELOP_LOGO from '../../image/onlineLecture/pj_develop_logo.png';

const OnlineLecture = () => {

    return (
        <div className='text-[18px] text-[#c1cccc] font-consolas px-5'>   
            <div className='mb-8 items-center'>
                <div className='flex bg-[#181818] rounded-lg px-3 py-2 w-fit items-center'>
                    <img src={IMG_DEVELOP_LOGO} alt="develop_logo" className='h-[20px]'/>
                </div>
                <p className='font-kr text-gray-200 text-[24px] font-bold'>온라인 강의 플랫폼</p>
            </div>

            <div className='flex'>
                <div className='flex-1 border-r border-gray-500'>
                    <table className='text-[14px]'><tbody>
                        <tr>
                            <td>📅</td>
                            <td>2023.11 ~ 2023.12</td>
                        </tr>
                        <tr>
                            <td className='text-center'>🧍‍♂️</td>
                            <td>1</td>
                        </tr>
                    </tbody></table><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>🔨 Technology Stack</p>
                        <p>#JSP #MVC2 #Axios #BootStrap #Naver API #SMTP</p>
                    </div><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>🔧 Flatform</p>
                        <p>#Eclipse #MySQL #Tomcat</p>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'>📌 Summary</p>
                        <p className='my-2 font-semibold'>강사, 수강자, 관리자의 역할을 분명하게 나눈 온라인 강의 플랫폼</p>
                        <ul className='text-[16px] list-disc pl-6'>
                            <li>대규모 온라인 개방형 강좌 플랫폼 K-MOOC에서 영감</li>
                            <li>첫 웹 프로젝트로, 웹에서 자주 사용하는 기능을 최대한 많이 경험하기 위해 주제 선정</li>
                            <li>네이버 간편 로그인, 메일 인증, 암호화 등 보안에 중점</li>
                            <li>여러 권한을 가진 사용자의 접근 권한을 깊이 있게 구현</li>
                            <li>강의실 페이지에서 화면 구성의 가시성을 위해 Axios 사용</li>
                            <li>Model, View, Controller를 명확히 구분하여 MVC2 패턴 구성</li>
                        </ul>
                        <div className='border-l-[2px] border-yellow-300 pl-2 mt-3 text-[16px]'>
                            네이버 간편 로그인, 메일인증, 키워드 검색, 마이페이지<br/>
                            강의영상 시청, 강의자료 다운로드, 수강생 관리, 강의실 관리, 게시판, 댓글
                        </div>
                    </div>
                </div>
                <div className='flex flex-1 justify-center'>
                    <img src={IMG_DEVELOP_MAIN} alt="develop" className='w-[600px]'/>
                </div>
            </div>
        </div>
    );
};

export default OnlineLecture;