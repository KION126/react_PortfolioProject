import React from 'react';
import ImageSlider from './ImageSlider';
import { useRecoilValue } from 'recoil';
import { SearchKeywordState, SelectedSideState } from '../../recoil/state';

const highlightText = (text, searchKeyword) => {
    if (!searchKeyword) return text;

    const regex = new RegExp(`(${searchKeyword})`, 'gi');
    return text.split(regex).map((part, index) => 
        regex.test(part) ? <mark className='bg-[#623315] text-white' key={index}>{part}</mark> : part
    );
};

const logoStyle = (logoWidht) => {
    return {
        height: 'auto',
        minWidth: logoWidht,
        maxWidth: logoWidht,
    };
}

const ProjectSection = ({ windowWidth, title, period, teamType, techStack, platform, summaryTitle, summary, keywordList, members, images }) => {
    const searchKeyword = useRecoilValue(SearchKeywordState);
    const selectedSide = useRecoilValue(SelectedSideState);

    // 'Search'일 때만 highlightText 함수 호출
    const applyHighlight = (text) => {
        if (selectedSide === 'Search') {
            return highlightText(text, searchKeyword);
        }
        return text; // 'Search'가 아닐 때는 원본 텍스트 그대로 반환
    };

    return (
        <div className={`text-[18px] text-[#c1cccc] font-consolas text-nowrap`}>
            <div className={`w-full ${windowWidth <= 1360 ? 'flex flex-col' : 'flex'}`}>
                <div className='mb-8 items-center'>
                    <div className='flex'>
                        <div className='bg-[#181818] rounded-lg pl-5 px-5 py-3'>
                            <p className='font-kr text-gray-200 text-[28px] font-bold'>{applyHighlight(title, searchKeyword)}</p>
                            <div className='text-[14px]'>
                                <p className='font-kr'>{applyHighlight(period, searchKeyword)}</p>
                                <p className='font-kr text-[13px]'>{applyHighlight(teamType, searchKeyword)}</p>
                            </div>
                        </div>
                        {images?.logo && (
                            <div className='border-l-[3px] border-dotted border-gray-700'></div>
                        )}
                        {images?.logo && (
                            <div className='flex items-center bg-[#181818] rounded-r-lg px-5 py-3'>
                                <img src={images?.logo} alt="develop_logo" style={logoStyle(images?.logoWidth)} />
                            </div>
                        )}
                    </div><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>{applyHighlight('🔨 Technology Stack', searchKeyword)}</p>
                        <p className='break-words text-wrap'>{applyHighlight(techStack, searchKeyword)}</p>
                    </div><br/>
                    <div>
                        <p className='text-[20px] font-bold font-kr'>{applyHighlight('🔧 Platform', searchKeyword)}</p>
                        <p>{applyHighlight(platform, searchKeyword)}</p>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'>{applyHighlight('📌 Summary', searchKeyword)}</p>
                        <p className='my-2 font-semibold'>{applyHighlight(summaryTitle, searchKeyword)}</p>
                        <ul className='text-[16px] pl-2 leading-8'>
                            {summary.split('\n').map((line, idx) => (
                                <li key={idx}>{applyHighlight(line, searchKeyword)}</li>
                            ))}
                        </ul>
                    </div><br/>
                    <div className='font-kr'>
                        <div className='flex gap-x-4 flex-wrap w-[600px]'>
                            {keywordList?.map((keyword, index) => (
                                <p key={index} className='text-[16px] text-blue-400 rounded-md'>{applyHighlight(keyword, searchKeyword)}</p>
                            ))}
                        </div>
                    </div><br/>
                    <div className='font-kr'>
                        <p className='text-[20px] font-bold'>{members && applyHighlight('👨‍👦‍👦 Members', searchKeyword)}</p>
                        <ul className='text-[16px] pl-2 leading-8'>
                            {members?.map((member, idx) => (
                                <li key={idx}>
                                    {applyHighlight(member.name, searchKeyword)}{' '}
                                    {member.link && (
                                        <a href={member.link} target="_blank" rel="noreferrer" className='text-blue-500 hover:underline'>
                                            {applyHighlight('Github', searchKeyword)}
                                        </a>
                                    )}
                                    {applyHighlight(member.description, searchKeyword)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={`flex justify-center items-start mt-[60px] w-full`}>
                    <ImageSlider obj={images?.slider} />
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
