// InhatcChatbot.js
import React from 'react';
import IMG_ALT from '../../image/inhatcChatbot/pj_alt.png';
import IMG_MAIN from '../../image/inhatcChatbot/pj_main.png';
import IMG_CLU from '../../image/inhatcChatbot/pj_clu.png';
import IMG_CRAWLING from '../../image/inhatcChatbot/pj_crawling.png';
import IMG_OPENAI from '../../image/inhatcChatbot/pj_openai.png';
import ProjectSection from '../public/ProjectSection';

const InhatcChatbot = (props) => {
    const keywordList = [
        '#CLU를 통한 NLP(자연어 처리)구현',
        '#웹 크롤링으로 실시간 데이터 제공',
        '#생성형 AI 모델 활용',
    ];

    const members = [
        { name: '왕건(본인)', description: 'Microsoft Azure Bot 학습, OpenAI API연동, Emulator 디자인' },
        { name: '황지홍', link: 'https://github.com/hwangjihong/', description: 'Microsoft Azure Bot 연동, 데이터 수집, 웹 크롤링, 데이터 정형화' },
    ];

    return (
        <ProjectSection
            windowWidth={props.windowWidth}
            title="대학교 종합정보 챗봇"
            period="2024.5 ~ 2024.06"
            teamType="팀 프로젝트"
            techStack="#Csharp #MicrosoftBotFrameWork"
            platform="#VisualStudio #BotFrameWorkEmulator"
            summaryTitle="인하공업전문대학교의 입시, 종합정보를 알려주는 챗봇"
            summary={`인하공업전문대학교에 입학하고 싶은 고등학생들과 현재 재학생들을 위해 개발\n- CLU를 사용하여 예시 질문사례 데이터를 학습 시켜 NLP(자연어 처리)를 구현\n- 학교 홈페이지를 웹 크롤링하여 식당메뉴, 공지사항 등 실시간 데이터를 제공\n- OpenAI의 ChatGPT 3.5 Turbo모델의 API를 사용하여 학습되지 않은 질문이나\n 챗봇 모델이 이해하지 못하는 질문에는 ChatGPT가 대답할 수 있도록 구현`}
            keywordList={keywordList}
            members={members}
            images={{
                logo: IMG_ALT,
                logoWidth: '70px',
                slider: [
                    { title: '인사카드', img: IMG_MAIN },
                    { title: 'NLP', img: IMG_CLU },
                    { title: 'Web Crawling', img: IMG_CRAWLING },
                    { title: 'OpenAI', img: IMG_OPENAI },
                ]
            }}
        />
    );
};

export default InhatcChatbot;
