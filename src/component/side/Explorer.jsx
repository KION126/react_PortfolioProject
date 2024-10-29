import React, { useEffect, useState } from 'react';
import '../../style/explorerStyle.css';
import ExplorerItem from '../ExplorerItem';
import fileStructureData from '../../jsonData/FileStructureData.json';

const Explorer = ({ setExplorerWidth, width }) => {
    const [isResizing, setIsResizing] = useState(false);    // 클릭 여부
    const [initialX, setInitialX] = useState(0);            // 초기 X 좌표

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

            // 너비 제한 설정
            if(newWidth <= 700){
                if(newWidth <= 150){
                    if(e.clientX <= 75){    // 최소 너비(150px)에서 커서를 왼쪽으로 이동시 탐색기 닫기    
                        setExplorerWidth(0);
                    }
                } else{
                    setExplorerWidth(newWidth);
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
        <div className='flex h-full bg-[#181818] text-[#c1cccc] border-l border-[#2B2B2B]'>
            <div style={{width}}>
                <div>
                    <div className='px-4 py-2 text-[11px]'>
                        탐색기
                    </div>
                    <ExplorerItem item={fileStructureData} title={fileStructureData.title} padding='0'/>
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