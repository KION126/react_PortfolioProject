import React from 'react';
import IMG_LOGO from '../../image/inhatcCinema/pj_logo.png';
import IMG_MAIN from '../../image/inhatcCinema/pj_main.png';
import IMG_CANCEL from '../../image/inhatcCinema/pj_cancel.png';
import IMG_MEMBER from '../../image/inhatcCinema/pj_member.png';
import IMG_RESER from '../../image/inhatcCinema/pj_reser.png';
import IMG_SEAT from '../../image/inhatcCinema/pj_seat.png';
import ProjectSection from '../public/ProjectSection';

const InhatcChinema = (props) => {
    const keywordList = [
        '#DB서버 구축',
        '#로그인',
        '#회원가입',
        '#마이페이지',
        '#영화 포스터 리스트 전환 효과 애니메이션 구현',
    ];

    const members = [
        { name: '왕건(본인)', description: 'Text Captcha API 구현, 실시간 좌석 예매 구현, 마이페이지 구현' },
        { name: '황지홍', link: 'https://github.com/hwangjihong/', description: 'DB서버 구축, 로그인, 회원가입, 영화 포스터 리스트 전환 효과 애니메이션 구현' },
    ];

    return (
        <ProjectSection
            windowWidth={props.windowWidth}
            title="영화관 예매 윈도우 애플리케이션"
            period="2024.5 ~ 2024.06"
            teamType="팀 프로젝트"
            techStack="#Java #WindowApplication #NetBeans Swing GUI"
            platform="#NetBeans #MySQL"
            summaryTitle="실시간 좌석 예매가 가능한 영화관 예매 윈도우 애플리케이션"
            summary={`- Netbeans GUI로 영화관 결제, 좌석 예매 윈도우 애플리케이션\n- Text Captcha API를 적용시켜 사용자가 사람인지 컴퓨터 프로그램인지 판별, 보안강화\n- 영화 포스터 리스트 전환 효과 애니메이션 구현\n- 실시간 영화관 좌석 예매를 위한 DB서버 구축 및 로직 구현`}
            keywordList={keywordList}
            members={members}
            images={{
                logo: IMG_LOGO,
                logoWidth: '150px',
                slider: [
                    { title: '메인', img: IMG_MAIN },
                    { title: '로그인/회원가입', img: IMG_MEMBER },
                    { title: '영화예약', img: IMG_RESER },
                    { title: '좌석선택', img: IMG_SEAT },
                    { title: '마이페이지', img: IMG_CANCEL },
                ]
            }}
        />
    );
};

export default InhatcChinema;
