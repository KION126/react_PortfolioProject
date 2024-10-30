import React, { useEffect, useState } from 'react';
import MenuButton from './MenuButton';
import WindowButton from './WindowButton';
import IMG_LOGO from '../../image/logo.png';
import ICON_SEARCH from '../../image/search.svg';
import ICON_MENU from '../../image/menu.svg';

const TopMenu = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        //1360px 이하일 경우 드롭다운 메뉴로 변경
        window.addEventListener('resize', handleResize)

        // 컴포넌트 언마운트 시 이벤트 리스너 삭제
        return () => {
          window.removeEventListener('resize', handleResize)
        }
      }, [])

    return (
        <nav className='flex bg-[#181818] border-b border-[#2B2B2B] h-full text-white items-center'>
            <div className='flex-1 flex'>
                <img src={IMG_LOGO} alt='logo' className='size-4 mx-2 self-center'/>
                {windowWidth <= 1360 ? (
                    <div className='rounded-md px-1 py-[2px] hover:bg-[#2D2E2E]'>
                        <img src={ICON_MENU} alt='logo' className='size-5 mx-2'/>
                    </div>
                    ):(
                    <ul className='flex gap-1 items-center'>
                        <li><MenuButton title='파일'/></li>
                        <li><MenuButton title='편집'/></li>
                        <li><MenuButton title='선택영역'/></li>
                        <li><MenuButton title='보기'/></li>
                        <li><MenuButton title='이동'/></li>
                        <li><MenuButton title='실행'/></li>
                        <li><MenuButton title='터미널'/></li>
                        <li><MenuButton title='도움말'/></li>
                    </ul>)
                }
            </div>
            
            <div className='flex-1 flex justify-center h-[70%]'>
                <div className='flex justify-center border border-[#454545] bg-[#242424] rounded-md text-[12px] w-[80%] gap-1'>
                    <img src={ICON_SEARCH} alt='search' className='-scale-x-100'></img>
                    <p className='self-end pb-[2px]'>Gun's Portfolio</p>
                </div>
            </div>
            <div className='flex-1 flex justify-end h-full'>
                <WindowButton />
            </div>
        </nav>
    );
};

export default TopMenu;