import React, { useEffect, useState } from 'react';
import SideToolbar from '../side/SideTaskBar';
import SideActivityBar from '../side/SideActivityBar';
import TabNav from './TabNav';
import Prompt from './Prompt';
import TopMenu from './TopMenu';
import BottomMenu from './BottomMenu';

const Layout = ({ children }) => {
    const [SideActivityBarWidth, setSideActivityBarWidth] = useState(200);
    const [promptHeight, setPromptHeight] = useState(200);
    const [childrenHeight, setChildrenHeight] = useState(window.innerHeight - 72 - 200); // 초기값 설정

    // promptHeight가 변경될 때마다 childrenHeight를 업데이트
    useEffect(() => {
        setChildrenHeight(window.innerHeight - 88 -promptHeight);
    }, [promptHeight]);

    return (
        <div className='h-svh'>
            <div className='h-[4%]'>
                <TopMenu />
            </div>
            <div className='flex h-[94%]'>
                <div className='flex'>
                    <SideToolbar />
                    <SideActivityBar SideActivityBarWidth={SideActivityBarWidth} setSideActivityBarWidth={setSideActivityBarWidth}/>
                </div>
                <div className='bg-[#1F1F1F] w-full text-white'
                style={{ width: `calc(100% - (${SideActivityBarWidth}px + 49px))` }}>
                    <TabNav/>
                    <div className="p-9 overflow-auto" style={{ height: childrenHeight}}>
                        {children}
                    </div>
                    <Prompt 
                        SideActivityBarWidth={SideActivityBarWidth}
                        promptHeight={promptHeight}
                        setPromptHeight={setPromptHeight}
                    />
                </div>
            </div>
            <div className='h-[2%]'>
                <BottomMenu />
            </div>
        </div>
    );
};

export default Layout;