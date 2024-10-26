import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { TabListState } from '../../recoil/state';
import { SelectedTabState } from '../../recoil/state';
import ICON_CLOSE from '../../icon/close.png';

const TopMenu = () => {
    const [tabList, setTabList] = useRecoilState(TabListState); // 탭 리스트
    const [selectedTab, setSelectedTab] = useRecoilState(SelectedTabState); // 선택된 탭
    const [hoveredTabIndex, setHoveredTabIndex] = useState(null); // 현재 호버된 탭의 인덱스
    const [removedIndex, setRemovedIndex] = useState(null); // 제거된 탭의 인덱스

    // 탭 클릭 이벤트
    const handleClick = (index) => {
        setSelectedTab(index);
    };

    // 탭 제거 이벤트
    const handleRemove = (index) => {
        // tabList에서 해당 index로 tabList에서 제거
        setTabList(tabList.filter((_, i) => i !== index));
        // 제거된 탭의 인덱스 저장
        setRemovedIndex(index);
    };

    // 탭 제거 유효성 검사
    useEffect(() => {
        if (removedIndex !== null) {    // 제거된 탭이 있을 경우
            if (tabList.length !== 0) { // 탭이 존재할 경우
                setSelectedTab(removedIndex-1); // 제거된 탭의 앞 탭 선택
            }
            setRemovedIndex(null);  // 제거된 탭 상태 초기화
        }
    }, [tabList, removedIndex, setSelectedTab]);

    return (
        <div className="w-full bg-[#181818] text-white">
            <div className='table border-collapse'>
                {tabList.map((tab, index) => {
                    const isHovered = hoveredTabIndex === index;

                    return (
                        <div 
                            key={index} 
                            className={`table-cell h-8 border border-[#2B2B2B] cursor-pointer hover:bg-[#1F1F1F] ${index === selectedTab && 'bg-[#1F1F1F] border-b-0'}`}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => setHoveredTabIndex(index)}
                            onMouseLeave={() => setHoveredTabIndex(null)}
                        >
                             <div className={`${index === selectedTab && 'w-full border-t border-blue-600'}`}></div>

                            <div className='flex h-full px-2 items-center gap-1'>
                                <div className='size-4'>
                                    <img src={require(`../../icon/${tab.icon}.png`)} alt='close' className='self-center size-4'>
                                    </img>
                                </div>
                                <div className='text-[14px] pb-1'>
                                    {tab.title}
                                </div>
                                <div className='size-[18px]'>
                                    {isHovered && (
                                        <img src={ICON_CLOSE} alt='close' className='p-1 self-center rounded-[4px] hover:bg-[#313232]'
                                        onClick={() => handleRemove(index)}>
                                        </img>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopMenu;