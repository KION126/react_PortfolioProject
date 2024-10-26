import React from 'react';
import SideToolbar from '../side/SideToolbar';
import Explorer from '../side/Explorer';
import TopMenu from './TopMenu';

const Layout = ({ children }) => {
    return (
        <div className='flex'>
            <div className='flex'>
                <SideToolbar />
                <Explorer />
            </div>
            <div className='bg-[#1F1F1F] w-full'>
                <TopMenu />
                {children}
            </div>
        </div>
    );
};

export default Layout;