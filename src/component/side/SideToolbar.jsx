import React from 'react';
import ICON_EXPLORE from '../../image/explore.svg';
import ICON_SEARCH from '../../image/search.svg';

const SideToolbar = () => {
    return (
        <div className="w-12 h-full p-2 bg-[#181818] text-white">
            <ul className='flex flex-col gap-3'>
                <li><img src={ICON_EXPLORE} alt='explore' className='size-7'></img></li>
                <li><img src={ICON_SEARCH} alt='search' className='size-8'></img></li>
            </ul>
        </div>
    );
};

export default SideToolbar;