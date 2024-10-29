import React, { useState } from 'react';
import SideToolbar from '../side/SideToolbar';
import Explorer from '../side/Explorer';
import TabNav from './TabNav';
import Prompt from './Prompt';
import TopMenu from './TopMenu';

const Layout = ({ children }) => {
    const [explorerWidth, setExplorerWidth] = useState(200);

    return (
        <div className='h-svh'>
            <div className='h-[4%]'>
                <TopMenu />
            </div>
            <div className='flex h-[96%]'>
                <div className='flex'>
                    <SideToolbar />
                    <Explorer setExplorerWidth={setExplorerWidth} width={explorerWidth}/>
                </div>
                <div className='bg-[#1F1F1F] w-full text-white'>
                    <TabNav />
                    {children}
                    <Prompt width={explorerWidth}/>
                </div>
            </div>
        </div>
    );
};

export default Layout;