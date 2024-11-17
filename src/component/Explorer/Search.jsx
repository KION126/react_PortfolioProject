import React, { useEffect, useState } from 'react';
import fileContentData from '../../jsonData/FileContentData.json';
import ICON_ARROW_RIGHT from '../../image/arrow_right.png';
import { useRecoilState } from 'recoil';
import { SelectedTabState, SearchKeywordState } from '../../recoil/state';

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useRecoilState(SearchKeywordState);
    const [selectedTab, setSelectedTab] = useRecoilState(SelectedTabState);
    const [results, setResults] = useState([]);
    const [totalKeywordCount, setTotalKeywordCount] = useState(0);

    // 디바운스를 위한 타이머
    let debounceTimer;

    // 키워드 검색 함수
    const handleSearch = (keyword) => {
        if (!keyword) {
            setResults([]);
            setTotalKeywordCount(0);
            return;
        }
        let totalCount  = 0;
        const matchedFiles = fileContentData.fileContent.map(item => {
            const matchCount = (item.content.match(new RegExp(keyword, 'gi')) || []).length;
            if (matchCount > 0) {
                totalCount += matchCount; // 총 키워드 개수 합산
                return { ...item, matchCount };
            }
            return null;
        }).filter(item => item !== null);

        setResults(matchedFiles);
        setTotalKeywordCount(totalCount);
    };

    // 검색어 입력 처리
    const handleInputChange = (e) => {
        const keyword = e.target.value;
        setSearchKeyword(keyword);

        // 디바운스: 입력 후 300ms 대기
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            handleSearch(keyword);
        }, 300);
    };

    useEffect(() => {
        searchKeyword && handleSearch(searchKeyword);
    }, [searchKeyword]);

    return (
        <div className="text-[12px]">
            <div className="px-4 py-2">검색</div>
            <div className="flex">
                <img src={ICON_ARROW_RIGHT} alt="ARROW_RIGHT" className="size-4 self-center mr-[2px]" />
                <input
                    type="text"
                    name="keyword"
                    placeholder="검색"
                    className="w-full mr-2 h-[26px] px-1 bg-[#313131] border border-[#3c3c3c] transition-colors whitespace-nowrap overflow-hidden text-ellipsis 
                        focus:border-[#A48ACF] focus:outline-none"
                    value={searchKeyword}
                    onChange={handleInputChange}
                />
            </div>

            {searchKeyword.length > 0 && (
                <div className='pl-4 my-3 whitespace-nowrap overflow-hidden'>
                    {results.length}개의 파일에서 {totalKeywordCount}개 결과
                </div>
            )}
            

            {results.map((item, index) => (
                <div
                    key={index} 
                    className={`flex gap-1 px-2 text-[12px] bg-[#181818] cursor-pointer 
                    hover:bg-[#2a2d2e] ${selectedTab === item.title && 'bg-[#37373d] hover:bg-[#37373d]'} `}
                    onClick={() => setSelectedTab(item.title)}
                >
                    
                    <div className="flex gap-1 py-[3px] w-full relative">
                        {/* 파일 아이콘 */}
                        <img
                            src={require(`../../image/${item.icon}.png`)}
                            alt="icon"
                            className="w-[14px] h-[14px] self-center"
                        />

                        {/* 타이틀 */}
                        <div className="whitespace-nowrap overflow-hidden text-ellipsis flex-grow mr-10">
                            {item.koTitle}
                        </div>

                        {/* 키워드 매칭 카운트*/}
                        <div className="absolute right-0 rounded-full bg-[#616161] text-white text-center px-[6px]">
                            {item.matchCount}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Search;
