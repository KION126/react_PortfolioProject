import React from 'react';
import IMG_LOGO_SHADOW from '../../image/logo_shadow.svg';

const Welcome = () => {
    return (
        <div className='flex flex-col h-full items-center pt-[150px] font-en'>
            <img src={IMG_LOGO_SHADOW} alt='logo'
                className='size-[200px]'
            />
            <p className='text-2xl font-semibold mt-6'>Welcome!</p>
            <p className='flex text-4xl font-bold mt-2'>
                <span className='text-[#A48ACF]'>WangGun's</span>&nbsp;Studio
            </p>
        </div>
    );
};

export default Welcome;