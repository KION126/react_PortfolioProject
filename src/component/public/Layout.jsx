import React from 'react';
import SideToolbar from '../side/SideToolbar';
import Explorer from '../side/Explorer';

const Layout = ({ children }) => {
    return (
        <div className='flex'>
            <div className='flex'>
                <SideToolbar />
                <Explorer />
            </div>
            <div className='bg-[#1F1F1F] w-full'>
                {children}
            </div>
        </div>
    );
};

export default Layout;