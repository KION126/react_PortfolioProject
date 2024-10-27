import React, { useState } from 'react';
import SideToolbar from '../side/SideToolbar';
import Explorer from '../side/Explorer';
import TopMenu from './TopMenu';
import Prompt from './Prompt';

const Layout = ({ children }) => {
    const [explorerWidth, setExplorerWidth] = useState(200);

    return (
        <div className='flex'>
            <div className='flex'>
                <SideToolbar />
                <Explorer setExplorerWidth={setExplorerWidth} width={explorerWidth}/>
            </div>
            <div className='bg-[#1F1F1F] w-full'>
                <TopMenu />
                {children}
                <Prompt width={explorerWidth}/>
            </div>
        </div>
    );
};

export default Layout;