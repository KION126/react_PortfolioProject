import React, { useState } from 'react';
import '../../style/imageSliderStyle.css';

const ImageSlider = ({ obj }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // 이미지 전환 시 클릭을 일시적으로 막는 함수
    const handleImageChange = (index) => {
        if (isTransitioning || index === currentIndex) return;

        setIsTransitioning(true);  // 전환 시작
        setFadeIn(false);  // fade-out 시작
        setTimeout(() => {
            setCurrentIndex(index);
            setFadeIn(true);  // fade-in 시작
        }, 300);  // fade-out과 fade-in 전환 사이 시간 조정

        setTimeout(() => {
            setIsTransitioning(false);  // 클릭 재허용
        }, 300);  // 0.3초 후 클릭 가능
    };

    return (
        <div className='flex flex-col gap-4 justify-center font-kr w-[500px]'>
            {/* 페이지네이션 */}
            <div className='pagination-div' style={{ pointerEvents: isTransitioning ? 'none' : 'auto' }}>
                {obj.map((item, index) => (
                    <div className='flex items-end' key={index}>
                        <p
                            className={`cursor-pointer px-2 ${index === currentIndex ? 'font-semibold text-white border-[#A48ACF]' : 'text-gray-400 border-gray-400'}`}
                            onClick={() => handleImageChange(index)}
                        >
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* 현재 이미지 표시 */}
            <div className=''>
                <img
                    src={obj[currentIndex].img}
                    alt={obj[currentIndex].title}
                    className={`w-full max-w-lg rounded-md fade-image ${fadeIn ? 'show' : ''}`}
                />
            </div>
        </div>
    );
};

export default ImageSlider;
