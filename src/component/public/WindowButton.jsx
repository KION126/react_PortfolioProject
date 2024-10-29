import React from 'react';
import ICON_CLOSE from '../../image/close.svg';
import ICON_WINDOW_SELECT from '../../image/window_select.svg';
import ICON_WINDOW_MINI from '../../image/window_mini.svg';

const WindowButton = () => {
    const iconDivStyle = ' w-[54px] flex items-center justify-center cursor-pointer';

    return (
        <>
            <div className={`hover:bg-[#373737] ${iconDivStyle}`}
                //onClick={() =>  document.body.style.display = 'none'}
            >
                <img src={ICON_WINDOW_MINI} alt='window_mini' className='size-4'></img>
            </div>
            <div className={`hover:bg-[#373737] ${iconDivStyle}`}
                //onClick={() => window.select()}
            >
                <img src={ICON_WINDOW_SELECT} alt='window_select' className='size-[14px]'></img>
            </div>
            <div className={`hover:bg-red-600 ${iconDivStyle}`}
                onClick={() => window.close()}
            >
                <img src={ICON_CLOSE} alt='window_close' className='size-[20px]'></img>
            </div>
        </>
    );
};

export default WindowButton;