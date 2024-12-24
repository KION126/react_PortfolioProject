import React from 'react';
import IMG_DEVELOP_MAIN from '../../image/onlineLecture/pj_develop_main.png';
import IMG_DEVELOP_LOGO from '../../image/onlineLecture/pj_develop_logo.png';
import IMG_ERD from '../../image/onlineLecture/pj_erd.png';
import IMG_DETAIL from '../../image/onlineLecture/pj_detail.png';
import IMG_MYPAGE from '../../image/onlineLecture/pj_mypage.png';
import IMG_LECTURE from '../../image/onlineLecture/pj_lecture.png';
import IMG_NOTICE from '../../image/onlineLecture/ph_notice.png';
import ProjectSection from '../public/ProjectSection';

const OnlineLecture = (props) => {
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
        <ProjectSection
            windowWidth={props.windowWidth}
            title="온라인 강의 플랫폼"
            period="2023.11 ~ 2023.12"
            teamType="개인 프로젝트"
            techStack="#JSP #MVC2 #Ajax #BootStrap #Naver API #SMTP"
            platform="#Eclipse #MySQL #Tomcat"
            summaryTitle="강사, 수강자, 관리자의 권한을 분명하게 나눈 사용자 중심 온라인 강의 플랫폼"
            summary={`- 대규모 온라인 개방형 강좌 플랫폼 K-MOOC에서 영감\n- 첫 웹 프로젝트로, 웹에서 자주 사용하는 기능을 최대한 많이 경험하기 위해 주제 선정\n- 네이버 간편 로그인, 메일 인증, 암호화 등 보안에 중점\n- 여러 권한을 가진 사용자의 접근 권한을 깊이 있게 구현\n- 강의실 게시판 댓글 데이터를 가져오기 위한 Ajax 사용\n- Model, View, Controller를 명확히 구분하여 MVC2 패턴 구성`}
            keywordList={keywordList}
            images={{
                logo: IMG_DEVELOP_LOGO,
                logoWidth: '150px',
                slider: [
                    { title: '메인', img: IMG_DEVELOP_MAIN },
                    { title: 'ERD', img: IMG_ERD },
                    { title: '강의상세', img: IMG_DETAIL },
                    { title: '마이페이지', img: IMG_MYPAGE },
                    { title: '강의실', img: IMG_LECTURE },
                    { title: '공지', img: IMG_NOTICE },
                ]
            }}
        />
    );
};

export default OnlineLecture;
