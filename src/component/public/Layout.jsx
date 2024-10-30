import React, { useEffect, useState } from 'react';
import SideToolbar from '../side/SideToolbar';
import Explorer from '../side/Explorer';
import TabNav from './TabNav';
import Prompt from './Prompt';
import TopMenu from './TopMenu';

const Layout = ({ children }) => {
    const [explorerWidth, setExplorerWidth] = useState(200);
    const [promptHeight, setPromptHeight] = useState(200);
    const [childrenHeight, setChildrenHeight] = useState(window.innerHeight - 72 - 200); // 초기값 설정

    useEffect(() => {
        // promptHeight가 변경될 때마다 childrenHeight를 업데이트
        setChildrenHeight(window.innerHeight - 72 -promptHeight);
    }, [promptHeight]);

    return (
        <div className='h-svh'>
            <div className='h-[4%]'>
                <TopMenu />
            </div>
            <div className='flex h-[96%]'>
                <div className='flex'>
                    <SideToolbar />
                    <Explorer explorerWidth={explorerWidth} setExplorerWidth={setExplorerWidth}/>
                </div>
                <div className='bg-[#1F1F1F] w-full text-white'>
                    <TabNav/>
                    <div className="p-4 overflow-auto" style={{ height: childrenHeight}}>
                        {children}
                    </div>
                    <Prompt
                        explorerWidth={explorerWidth}
                        promptHeight={promptHeight}
                        setPromptHeight={setPromptHeight}
                    />
                </div>
            </div>
        </div>
    );
};

export default Layout;