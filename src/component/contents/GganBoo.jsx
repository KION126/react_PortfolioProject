import React from 'react';
import IMG_LOGO from '../../image/gganboo/pj_logo.png';
import IMG_MAIN from '../../image/gganboo/pj_main.png';
import IMG_SIGNUP from '../../image/gganboo/pj_signup.png';
import IMG_CAL from '../../image/gganboo/pj_cal.png';
import IMG_FOLLOW from '../../image/gganboo/pj_follow.png';
import ProjectSection from '../public/ProjectSection';

const GganBoo = (props) => {
    const keywordList = [
        '#TodoList',
        '#FireBase를 활용한 팔로우',
        '#팔로잉',
        '#이메일 인증',
        '#회원가입',
        '#로그인',
    ];

    const members = [
        { name: '왕건(본인)', description: 'FireBase를 활용한 이메일 인증, 팔로우, 팔로잉, UI 디자인' },
        { name: '황지홍', link: 'https://github.com/hwangjihong/', description: '달력 TodoList구현, FireBase를 활용한 회원가입, 로그인' },
    ];

    return (
        <ProjectSection
            windowWidth={props.windowWidth}
            title="공유 ToDoList 모바일 애플리케이션"
            period="2024.6 ~ 2024.6"
            teamType="팀 프로젝트"
            techStack="#Java #SMTP"
            platform="#AndroidStudio #FireBase"
            summaryTitle="자신의 ToDoList를 다른 사람과 공유할 수 있는 모바일 애플리케이션"
            summary={`- Android Studio를 사용한 자신의 TodoList를 공유할 수 있는 모바일 애플리케이션\n- FireBase를 활용하여 회원관리 및 이메일 인증, 팔로우 구현\n- 팔로우한 다른 유저의 TodoList 캘린더를 확인`}
            keywordList={keywordList}
            members={members}
            images={{
                logo: IMG_LOGO,
                logoWidth: '100px',
                slider: [
                    { title: '로그인', img: IMG_MAIN },
                    { title: '회원가입', img: IMG_SIGNUP },
                    { title: 'ToDoList', img: IMG_CAL },
                    { title: '팔로우/팔로잉', img: IMG_FOLLOW },
                ]
            }}
        />
    );
};

export default GganBoo;
