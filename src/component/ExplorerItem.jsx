import React, { useState } from 'react';
import ICON_ARROW_DOWN from '../icon/arrow_down.png';
import ICON_ARROW_RIGHT from '../icon/arrow_right.png';
import { useRecoilState } from 'recoil';
import { TabListState } from '../recoil/state';

const ExplorerItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);    // 탭 오픈 여부
    const [isMouseEnter, setIsMouseEnter] = useState(false);    // 마우스 호버 여부
    const [tabList, setTabList] = useRecoilState(TabListState);
    let bgColor = isMouseEnter ? 'bg-[#292c2d]' : 'bg-[#181818]';
    const padding = props.padding ? `${props.padding}px` : '0px';

    // 탭 토글 함수
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    // 탭 클릭 함수
    const handleClick = () => {
        // 이미 추가된 탭인지 확인
        const isTabAlreadyAdded = tabList.some(tab => tab.title === props.title);
        if (!props.item.children && !isTabAlreadyAdded) {
            // 새로운 탭 추가
            setTabList([...tabList, { title: props.title, icon: props.icon }]);
        }
        toggleOpen();
        console.log(tabList);
    };

    return (
        <div className={`${padding}`}>
            {/* 상위 탭 */}
            <div 
                className={`flex py-1 gap-1 text-[12px] cursor-pointer ${bgColor}`}
                style={{ paddingLeft: padding}}
                onClick={handleClick}
                onMouseEnter={() => setIsMouseEnter(true)}
                onMouseLeave={() => setIsMouseEnter(false)}
            >
                {/* 토글 아이콘 */}
                {props.item.children && (
                    <img
                        src={isOpen ? ICON_ARROW_DOWN : ICON_ARROW_RIGHT}
                        alt={isOpen ? 'open' : 'close'}
                        className='size-4 self-center'
                    />
                )}
                <div className='flex gap-1'>
                    {!props.item.children && (
                        <img
                            src={require(`../icon/${props.icon}.png`)}
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
                <>
                    {props.item.children.map((child, index) => (
                        <ExplorerItem 
                            key={index} 
                            item={child} 
                            title={child.title}
                            icon={child.icon}
                            padding={parseInt(padding) + 20}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default ExplorerItem;