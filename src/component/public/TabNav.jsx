import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { TabListState } from '../../recoil/state';
import { SelectedTabState } from '../../recoil/state';
import ICON_CLOSE from '../../image/close.svg';

const TabNav = () => {
    const [tabList, setTabList] = useRecoilState(TabListState); // 탭 리스트
    const [selectedTab, setSelectedTab] = useRecoilState(SelectedTabState); // 선택된 탭
    const [hoveredTabIndex, setHoveredTabIndex] = useState(null); // 현재 호버된 탭의 인덱스
    const [removedIndex, setRemovedIndex] = useState(null); // 제거된 탭의 인덱스

    // 탭 클릭 이벤트
    const handleClick = (title) => {
        setSelectedTab(title);
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
                const previousIndex = removedIndex - 1; // 앞 탭의 인덱스
                const nextIndex = removedIndex; // 뒷 탭의 인덱스

                if (previousIndex >= 0 && previousIndex < tabList.length) {
                    setSelectedTab(tabList[previousIndex].title); // 앞 탭의 title로 설정
                } else if (nextIndex >= 0 && nextIndex < tabList.length) {
                    setSelectedTab(tabList[nextIndex].title); // 뒷 탭의 title로 설정
                }
            } else{
                setSelectedTab(null); // 탭이 없을 경우 선택된 탭 초기화
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
                            className={`table-cell h-8 border border-[#2B2B2B] border-t-0 cursor-pointer hover:bg-[#1F1F1F] ${tab.title === selectedTab && 'bg-[#1F1F1F] border-b-0'}`}
                            onClick={() => handleClick(tab.title)}
                            onMouseEnter={() => setHoveredTabIndex(index)}
                            onMouseLeave={() => setHoveredTabIndex(null)}
                        >
                             <div className={`${tab.title === selectedTab && 'w-full border-t border-[#A48ACF]'}`}></div>

                            <div className='flex h-full px-2 items-center gap-1'>
                                <div className='size-4'>
                                    <img src={require(`../../image/${tab.icon}.png`)} alt='close' className='self-center size-4'>
                                    </img>
                                </div>
                                <div className='text-[14px]'>
                                    {tab.title}
                                </div>
                                <div className='size-[18px]'>
                                    {isHovered && (
                                        <img src={ICON_CLOSE} alt='close' className='p-[1px] self-center rounded-[4px] hover:bg-[#313232]'
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

export default TabNav;