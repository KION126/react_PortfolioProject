import React, { useEffect, useState } from 'react';
import '../../style/promptStyle.css';

const Prompt = (props) => {
    const [isResizing, setIsResizing] = useState(false);    // 클릭 여부
    const [height, setHeight] = useState(200);              // 높이
    const [initialY, setInitialY] = useState(0);            // 초기 Y 좌표

    let borderDiv = isResizing ? 'border-div2-resizing' : 'border-div2';

    // 마우스 Down 이벤트
    const handleMouseDown = (e) => {
        setIsResizing(true);
        setInitialY(e.clientY);
    };
    
    // 마우스 Up 이벤트
    const handleMouseUp = (e) => {
        setIsResizing(false);
    };

    // 마우스 Move 이벤트
    const handleMouseMove = (e) => {
        if (isResizing) {
            const newHeight = height + (initialY - e.clientY); // 높이 계산

            // 높이 제한 설정
            if (newHeight >= 100 && newHeight <= 700) {
                setHeight(newHeight);
            }

            setInitialY(e.clientY); // 초기 Y 좌표 업데이트
        }
    };

    useEffect(() => {
        if(isResizing){
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else{
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing]);


    return (
        // Explorer의 너비를 받아 Propmt의 너비를 계산하여 적용
        <div className='absolute bottom-0 w-full bg-[#181818] text-[#c1cccc] border-l border-[#2B2B2B]'
            style={{ width: `calc(100% - (${props.width}px + 49px))` }}>
            <div className='relative'>
                <div
                    className={`cursor-row-resize z-10 absolute top-0 left-0 right-0 bottom-0 ${borderDiv}`}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                />
                <div className='h-[1px] bg-[#2B2B2B] absolute top-0 left-0 right-0 bottom-0'/>
            </div>
            <div className='overflow-hidden w-max-[]' style={{height}}>
                <div>
                    <div className='w-[70px] px-4 py-2 text-[11px] text-center'>
                        터미널
                        <div className='border-t border-[#A48ACF]'></div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Prompt;