import React from 'react';
import ICON_LOGIC from '../../image/logic.svg';
import ICON_ERROR from '../../image/error.svg';
import ICON_WARNING from '../../image/warning.svg';
import ICON_PRETTIER from '../../image/prettier.svg';
import ICON_BELL from '../../image/bell.svg';

const BottomMenu = React.memo(() => {
    return (
        <div className='flex items-center h-full w-full bg-[#181818] border border-[#2B2B2B] text-[12px] text-[#c1cccc] px-2'>
            <div className='flex flex-1 items-center gap-5'>
                <div className='flex items-center gap-[2px]'>
                    <img src={ICON_LOGIC} alt='LOGIC' className='size-[14px]'/>
                    <p>main *+</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={ICON_ERROR} alt='LOGIC' className='size-[14px]'/>
                    <p>0</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={ICON_WARNING} alt='LOGIC' className='size-[14px]'/>
                    <p>0</p>
                </div>
            </div>
            <div className='flex flex-1 items-center justify-end gap-5'>
                <div className='flex items-center gap-[2px]'>
                    <img src={ICON_PRETTIER} alt='LOGIC' className='size-[14px]'/>
                    <p>Prettier</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={ICON_BELL} alt='LOGIC' className='size-[14px]'/>
                </div>
            </div>
        </div>
    );
});

export default BottomMenu;