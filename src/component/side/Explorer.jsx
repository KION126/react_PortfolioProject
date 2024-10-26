import React, { useEffect, useState } from 'react';
import '../../style/explorerStyle.css';
import ExplorerItem from '../ExplorerItem';
import { useRecoilState } from 'recoil';
import { TabListState } from '../../recoil/state';
import fileStructureData from '../../jsonData/FileStructureData.json';

const Explorer = () => {
    const [isResizing, setIsResizing] = useState(false);    // 클릭 여부
    const [width, setWidth] = useState(200);                // 너비
    const [initialX, setInitialX] = useState(0);            // 초기 X 좌표
    let isHovering = false;                                 // 호버 여부

    const [tabList, setTabList] = useRecoilState(TabListState);   // 탭 리스트

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

            if(newWidth <= 700){
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
        <div className='flex h-screen bg-[#181818] text-[#c1cccc] border-l border-[#2B2B2B]'>
            <div style={{width}}>
                <div>
                    <div className='px-4 py-2 text-[11px]'>
                        탐색기
                    </div>
                    <ExplorerItem item={fileStructureData} title={fileStructureData.title} padding='0' tabList={tabList}/>
                </div>
            </div>
            <div className='relative'>
                <div
                    className={`cursor-col-resize z-10 absolute top-0 left-0 right-0 bottom-0 ${borderDiv}`}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                />
                <div className='w-[1px] bg-[#2B2B2B] absolute top-0 left-0 right-0 bottom-0'/>
            </div>
        </div>
    );
};

export default Explorer;