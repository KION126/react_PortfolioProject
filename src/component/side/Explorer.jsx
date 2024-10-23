import React, { useEffect, useState } from 'react';
import '../../style/explorerStyle.css';
import ExplorerItem from '../ExplorerItem';
import { useRecoilState } from 'recoil';
import { TabListState } from '../../recoil/state';

const Explorer = () => {
    const [isResizing, setIsResizing] = useState(false);    // 클릭 여부
    const [width, setWidth] = useState(200);                // 너비
    const [initialX, setInitialX] = useState(0);            // 초기 X 좌표
    let isHovering = false;                                 // 호버 여부

    const tabList = useRecoilState([TabListState]);   // 탭 리스트

    const data = {
        title: "PORTFOLIO",
        children: [
            {
                title: "About",
                children: [
                    { title: "profile",
                    
                     },
                    { title: "about" }
                ]
            },
            { 
                title: "Project",
                children: [
                    { title: "profile",
                    
                     },
                    { title: "about" }
                ]
             },
        ]
    };

    let borderDiv = isResizing ? 'border-div-resizing' : 'border-div';

    // 마우스 Down 이벤트
    const handleMouseDown = (e) => {
        setIsResizing(true);
        setInitialX(e.clientX);
    };
    
    // 마우스 Up 이벤트
    const handleMouseUp = (e) => {
        setIsResizing(false);
    };

    // 마우스 Move 이벤트
    const handleMouseMove = (e) => {
        if (isResizing) {
            const newWidth = width + (e.clientX - initialX);

            if(newWidth => 150 && newWidth <= 800){
                setInitialX(e.clientX);
            } 
            if(newWidth <= 800){
                if(newWidth <= 150){
                    if(e.clientX <= 75){
                        setWidth(0);
                    }
                } else{
                    setWidth(newWidth);
                }
            }
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
        <div className='flex h-screen bg-[#181818] text-[#c1cccc] border-l border-[#222222]'>
            <div style={{width}}>
                <div>
                    <div className='px-4 py-2 text-[11px]'>
                        탐색기
                    </div>
                    <ExplorerItem item={data} title={data.title} padding='0' tabList={tabList}/>
                </div>
            </div>
            <div className='relative'>
                <div
                    className={`cursor-col-resize z-10 absolute top-0 left-0 right-0 bottom-0 ${borderDiv}`}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                />
                <div className='w-[1px] bg-[#222222] absolute top-0 left-0 right-0 bottom-0'/>
            </div>
        </div>
    );
};

export default Explorer;