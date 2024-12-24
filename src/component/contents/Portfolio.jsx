import React from 'react';
import IMG_LOGO from '../../image/logo.png';
import ProjectSection from '../public/ProjectSection';
import IMG_MAIN from '../../image/portfolio/main.JPG';
import IMG_ABOUT from '../../image/portfolio/about.JPG';
import IMG_PROJECT from '../../image/portfolio/project.JPG';

const Portfoilo = (props) => {
    const keywordList = [
        '#VSCode 디자인 형식의 개인 포트폴리오 웹사이트',
        '#간편한 이메일 전송',
        '#반응형 디자인',
        '#키워드 검색',
        '#새로고침 세션 스토리지 저장',
    ];

    return (
        <ProjectSection
            windowWidth={props.windowWidth}
            title="포트폴리오 웹사이트"
            period="2024.10. ~ 2024.12"
            teamType="개인 프로젝트"
            techStack="#React #JavaScript #Tailwind CSS #Recoil #Nodemailer #Vercel Serverless"
            platform="#VSCode #Vercel"
            summaryTitle="VSCode의 디자인 형식의 개인 포트폴리오 웹사이트"
            summary={`- 사용자가 직접 레이아웃의 동적 크기 조절\n- 프로젝트들의 Githhub, 구현영상, 학술지 이동 명령어 프롬프트 로직 구현\n- 웹페이지 새로고침에 대한 Recoil을 사용한 세션 스토리지 저장\n- Tailwind CSS를 사용한 반응형 디자인\n- Vercel Serverless와 Nodemailer를 사용한 이메일 전송 API 구현\n- 키워드로 쉽게 파일과 내용을 검색할 수 있는 키워드 검색 구현\n- React Memo 사용한 불필요한 렌더링 최적화`}
            keywordList={keywordList}
            images={{
                logo: IMG_LOGO,
                logoWidth: '70px',
                slider: [
                    { title: '메인', img: IMG_MAIN },
                    { title: 'About', img: IMG_ABOUT },
                    { title: 'Project', img: IMG_PROJECT },
                ]
            }}
        />
    );
};

export default Portfoilo;
