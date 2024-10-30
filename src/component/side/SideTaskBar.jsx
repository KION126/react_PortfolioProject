import React from 'react';
import { ReactComponent as ICON_EXPLORE } from '../../image/explore.svg';
import { ReactComponent as ICON_SEARCH } from '../../image/search.svg';
import { ReactComponent as ICON_MAIL } from '../../image/mail.svg';
import { useRecoilState } from 'recoil';
import { SelectedSideState } from '../../recoil/state';

const SideTaskBar = React.memo(() => {

    const [selectedSide, setSelectedSide] = useRecoilState(SelectedSideState); // 선택된 사이드
    return (
        <div className="w-12 h-full p-2 bg-[#181818]">
            <ul className='flex flex-col gap-3'>
                <ICON_EXPLORE className='size-7 cursor-pointer' 
                    onClick={() => setSelectedSide('Explorer')}
                    fill={selectedSide === 'Explorer' ? "#c1cccc" : "#868686"}
                />
                <ICON_SEARCH className='size-7 cursor-pointer' 
                    onClick={() => setSelectedSide('Search')}
                    fill={selectedSide === 'Search' ? "#c1cccc" : "#868686"}
                />
                <ICON_MAIL className='size-7 cursor-pointer'
                    onClick={() => setSelectedSide('Contact')}
                    fill={selectedSide === 'Contact' ? "#c1cccc" : "#868686"}
                />
            </ul>
        </div>
    );
});

export default SideTaskBar;