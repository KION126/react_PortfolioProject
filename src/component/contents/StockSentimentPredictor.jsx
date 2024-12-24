import React from 'react';
import ProjectSection from '../public/ProjectSection';
import IMG_BERT from '../../image/ssp/bert.JPG';
import IMG_FT from '../../image/ssp/fine_tuning.JPG';
import IMG_RESULT from '../../image/ssp/result.png';
import IMG_WC from '../../image/ssp/wordcloud.png';

const StockSentimentPredictor = (props) => {
    const keywordList = [
        '#API 요청 스케쥴링',
        '#한국어 텍스트 감정 분석 및 예측 모델 구축',
        '#한국어 텍스트 데이터 증강',
        '#뉴스 감정과 주가의 상관관계 분석',
    ];

    return (
        <ProjectSection
            windowWidth={props.windowWidth}
            title="뉴스 감정 예측 및 주가와의 상관관계 분석"
            period="2024.11. ~ 2024.12"
            teamType="개인 프로젝트"
            techStack="#Python #Pandas #Sklearn #Tensorflow #KLUE/BURT #Matplotlib #Bs4 #Naver API #K-TACC #FinanaceDataReader"
            platform="#Python #Anaconda #Jupyter Notebook"
            summaryTitle="뉴스의 감정을 예측하고 주가와의 상관관계를 분석하는 프로젝트"
            summary={`- AWS EC2 인스턴스와 Crontab 스케쥴러를 이용하여 네이버 API 뉴스 데이터 수집\n- KLUE/BERT 모델을 사용하여 뉴스 감정 예측 모델 학습\n- 다수의 주체가 포함된 텍스트 데이터를 증강\n- 다수의 주체가 포함된 데이터를 모델이 이해할 수 있도록 Fine-Tuning\n- 감정 점수와 주가 데이터의 상관관계 분석 및 시각화\n- 프로젝트 결과 보고서 및 발표 PPT Github 업로드`}
            keywordList={keywordList}
            images={{
                slider: [
                    { title: 'KLUE/BERT', img: IMG_BERT },
                    { title: 'Fine-Tuning', img: IMG_FT },
                    { title: '상관관계 시각화', img: IMG_RESULT },
                    { title: 'WordCloud', img: IMG_WC },
                ]
            }}
        />
    );
};

export default StockSentimentPredictor;
