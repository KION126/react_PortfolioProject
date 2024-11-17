import React from 'react';
import IMG_MAIN from '../../image/kinect/pj_main.png';
import IMG_MODE from '../../image/kinect/pj_mode.png';
import IMG_PLAY from '../../image/kinect/pj_play.png';
import IMG_RANK from '../../image/kinect/pj_rank.png';
import ProjectSection from '../public/ProjectSection';

const KinectMemoryGame = (props) => {
    const keywordList = [
        '#Kinect Depthstream활용 Motion Capture',
        '#Memory 카드 뒤집기 로직 구현',
        '#점수 기록 저장',
    ];

    const members = [
        { name: '왕건(본인)', description: '손바닥 tracking, WPF 가상 마우스 커서 조작, 점수 기록 저장, UI 디자인' },
        { name: '황지홍', link: 'https://github.com/hwangjihong/', description: 'Kinect Depthstream 연동, 게임로직 구현, DB서버 구축' },
    ];

    return (
        <ProjectSection
            windowWidth={props.windowWidth}
            title="치매 예방 기억력 카드 게임"
            period="2023.10 ~ 2023.12"
            teamType="팀 프로젝트"
            techStack="#Cshap #WPF #Motion Capture #Kinect Depthstream"
            platform="#VisualStudio #Kinect #MySQL"
            summaryTitle="강사, 수강자, 관리자의 역할을 분명하게 나눈 온라인 강의 플랫폼"
            summary={`- 고령화 사회와 치매 추정 환자수 증가 추이에 따른 치매 예방을 위한 게임 개발\n- Kinect Depthstream 기능을 활용, 손바닥을 tracking하여 WPF 가상 마우스 커서 조작\n- Memory 카드 뒤집기 로직 구현\n- 인지활동 뿐만 아니라 미세한 손의 움직임을 통한 적절한 운동을 유도하여 치매 예방에 기여`}
            keywordList={keywordList}
            members={members}
            images={{
                slider: [
                    { title: '메인', img: IMG_MAIN },
                    { title: '난이도', img: IMG_MODE },
                    { title: '플레이', img: IMG_PLAY },
                    { title: '랭킹', img: IMG_RANK },
                ]
            }}
        />
    );
};

export default KinectMemoryGame;
