import React, { useEffect, useState } from 'react';
import ICON_ARROW_DOWN from '../image/arrow_down.png';
import ICON_ARROW_RIGHT from '../image/arrow_right.png';
import { useRecoilState } from 'recoil';
import { TabListState, SelectedTabState, OpenForderListState } from '../recoil/state';

const ExplorerItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);    // 탭 오픈 여부
    const [tabList, setTabList] = useRecoilState(TabListState);
    const [selectedTab, setSelectedTab] = useRecoilState(SelectedTabState); // 선택된 탭
    const [openForderList, setOpenForderList] = useRecoilState(OpenForderListState); // 오픈된 폴더 리스트

    const padding = props.padding ? `${props.padding}px` : '0px';

    // 탭 클릭 함수
    const handleClick = (isFile, title) => {
        // 파일일 경우 선택된 탭으로 설정 / 폴더일 경우 하위 탭 오픈
        if(isFile) {
            setSelectedTab(title);
        } else {
            const isForderAlreadyAdded = openForderList.some(tab => tab === props.title);

            if(isForderAlreadyAdded) {
                setOpenForderList(openForderList.filter(tab => tab !== title)); // 오픈된 폴더 리스트에서 제거
            } else{
                setOpenForderList([...openForderList, title]); // 오픈된 폴더 리스트에 추가
            }

            setIsOpen(!isOpen); // 탭 오픈 여부 토글
        }
        
        // 이미 추가된 탭인지 확인
        const isTabAlreadyAdded = tabList.some(tab => tab.title === props.title);
        if (!props.item.children && !isTabAlreadyAdded) {
            // 새로운 탭 추가
            setTabList([...tabList, { title: props.title, icon: props.icon }]);
        }
    };

    useEffect(() => {
        // 오픈된 폴더 리스트에 현재 탭이 포함되어 있는지 확인
        const isTabOpened = openForderList && openForderList.some(tab => tab === props.title);
        if(isTabOpened) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, []);

    return (
        <div className={`${padding}`}>
            {/* 상위 탭 */}
            <div 
                className={`flex gap-1 text-[12px] bg-[#181818] cursor-pointer  hover:bg-[#2a2d2e] ${selectedTab === props.title && 'bg-[#37373d] hover:bg-[#37373d]'} `}
                style={{ paddingLeft: padding}}
                onClick={() => handleClick(!props.item.children, props.title)}
            >
                {/* 토글 아이콘 */}
                {props.item.children && (
                    <img
                        src={isOpen ? ICON_ARROW_DOWN : ICON_ARROW_RIGHT}
                        alt={isOpen ? 'open' : 'close'}
                        className='size-4 self-center'
                    />
                )}
                <div className='flex gap-1 py-[2px]'>
                    {/* 파일 아이콘 */}
                    {!props.item.children && (
                        <img
                            src={require(`../image/${props.icon}.png`)}
                            alt="icon"
                            className='size-[14px] self-center'
                        />
                    )}
                    <div className='pb-1'>
                        {props.title}
                    </div>
                </div>
            </div>

            {/* 하위 탭 */}
            {isOpen && props.item.children && (
                <div>
                    {props.item.children.map((child, index) => (
                        <ExplorerItem 
                            key={index} 
                            item={child} 
                            title={child.title}
                            icon={child.icon}
                            padding={parseInt(padding) + 15}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExplorerItem;