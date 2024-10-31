import React, { useEffect, useRef, useState } from 'react';
import '../../style/promptStyle.css';
import fileStructureData from '../../jsonData/FileStructureData.json';
import { useRecoilValue } from 'recoil';
import { SelectedTabState } from '../../recoil/state';

const Prompt = ({SideActivityBarWidth, promptHeight, setPromptHeight}) => {
    const selectedTab = useRecoilValue(SelectedTabState); // 선택된 탭
    const [isResizing, setIsResizing] = useState(false);    // 클릭 여부
    const [initialY, setInitialY] = useState(0);            // 초기 Y 좌표
    const [inputValue, setInputValue] = useState('');   // 입력값
    const [message, setMessage] = useState('');         // 오류 메세지
    const spanRef = useRef(null);
    const inputRef = useRef(null);

    // 영문, 특수문자, 공백만 입력 가능한 정규식
    const regex = /^[a-zA-Z~!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?` ]{0,20}$/;

    let borderDiv = isResizing ? 'border-div2-resizing' : 'border-div2';

    // 마우스 Down 이벤트
    const handleMouseDown = (e) => {
        setIsResizing(true);
        setInitialY(e.clientY);
    };
    
    // 마우스 Up 이벤트
    const handleMouseUp = (e) => {
        setIsResizing(false);
    };

    // 마우스 Move 이벤트
    const handleMouseMove = (e) => {
        if (isResizing) {
            const newHeight = promptHeight + (initialY - e.clientY); // 높이 계산
            // 너비 제한 설정
            if(newHeight <= 700){
                if(newHeight <= 160){
                    if(e.clientY >= 930){    // 최소 높이(150px)에서 커서를 아래로 이동시 탐색기 닫기    
                        setPromptHeight(4);
                    }
                } else{
                    setPromptHeight(newHeight);
                }
            }

            setInitialY(e.clientY); // 초기 Y 좌표 업데이트
        }
    };

    // Input 입력값 변경 이벤트
    const handleInputChange = (e) => {
        const value = e.target.value;
        setMessage(''); // 메세지 초기화

        // 정규식과 길이를 검증하여 유효한 값만 상태에 저장
        if (regex.test(value)) {
            setInputValue(value);
        }
    };

    // Input 키 입력 이벤트
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {    // Enter 키 입력 시
            executeCommand(inputValue.toLowerCase());
            setInputValue(''); // 입력값 초기화
        } else if (e.key === 'Backspace') { // Escape 키 입력 시
            setMessage(''); // 메시지 초기화
        }
    };

    // 명령어 실행 함수
    const executeCommand = (command) => {
        const url = findURL(selectedTab, command);
        switch (command) {
            case 'github':
                url ? window.confirm('해당 프로젝트의 GitHub로 이동하시겠습니까?') && window.open(url, '_blank') : setMessage(`해당 파일에는 '${command}' 명령어가 존재하지 않습니다.`); 
                break;
            case 'video':
                url ? window.confirm('해당 프로젝트의 구현영상을 시청하시겠습니까?') && window.open(url, '_blank') : setMessage(`해당 파일에는 '${command}' 명령어가 존재하지 않습니다.`); 
                break;
            case 'paper':
                url ? window.confirm('해당 프로젝트의 학술지로 이동하시겠습니까?') && window.open(url, '_blank') : setMessage(`해당 파일에는 '${command}' 명령어가 존재하지 않습니다.`); 
                break;
            case '':
                setMessage('명령어를 입력해주세요.');
                break;
            default:
                setMessage(`'${command}' 명령어를 찾을 수 없습니다.`);
                break;
        }
    };

    // URL 찾기 함수
    const findURL = (selectedTab, command) => {
        console.log(selectedTab, command);
        if(selectedTab === 'Welcome') return null;

        // Json파일에서 선택된 탭에 해당하는 객체 찾기
        const FindObject = fileStructureData.children.flatMap((child) => child.children)
            .find(item => item.title.toLowerCase() === selectedTab.toLowerCase());
    
        if (FindObject) {   // 객체가 존재하면 명령어에 해당하는 URL 반환
            return FindObject[command];
        }
    
        return null;
    };

    // isResizing 변경 시 이벤트 리스너 추가 및 제거(메모리 누수 방지)
    useEffect(() => {
        if(isResizing){
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else{
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing]);

    // inputValue 변경 시 spanRef의 너비를 inputRef에 적용(타이핑 글자 수에 따라 input 너비 자동 조절)
    useEffect(() => {
        if (spanRef.current && inputRef.current) {
            inputRef.current.style.width = `${spanRef.current.offsetWidth}px`;
        }
    }, [inputValue]);

    return (
        // Explorer의 너비를 받아 Propmt의 너비를 계산하여 적용
        <div className='absolute bottom-[16px] w-full bg-[#181818] text-[#c1cccc] overflow-hidden'
            style={{ width: `calc(100% - (${SideActivityBarWidth}px + 49px))` }}
            onClick={() => {inputRef.current.focus();}}
        >
            <div className='relative'>
                <div
                    className={`cursor-row-resize z-20 absolute top-0 left-0 right-0 bottom-0 ${borderDiv}`}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                />
                <div className='h-[1px] bg-[#2B2B2B] absolute top-0 left-0 right-0 bottom-0 z-10'/>
            </div>
            <div className='px-4 text-[15px]' style={{height: promptHeight}}>
                <div>
                    <div className='w-[45px] py-2 text-[11px] text-center'>
                        터미널
                        <div className='border-t border-[#A48ACF]'></div>
                    </div>
                    <div className='flex w-full'>
                        <p className='w-[120px]'>PS C:\Users\user&gt;</p>
                        {message && <p className='text-red-600'>{message}</p>} {/* 오류 메시지 출력 */}
                        <input
                            ref={inputRef}
                            className='bg-transparent outline-none'
                            type='text'
                            value={inputValue}
                            onChange={(e) => handleInputChange(e)}
                            onKeyDown={handleKeyPress}
                        />
                        {/* span 요소에 inputValue를 렌더링하여 너비 계산에 사용 */}
                        <span ref={spanRef} className='absolute invisible'>
                            {inputValue || '\u00a0'}
                        </span>
                    </div>
                    <div className='text-gray-600 mt-2'>
                        {/* 빠른 명령어 목록 */}
                        <table className='w-[300px] leading-[14px]'>
                            <tbody>
                                <tr>
                                    <td className='flex gap-1 text-blue-600'>&gt;
                                        <p onClick={() => {executeCommand('github'); setInputValue('')}} className="cursor-pointer hover:underline">github</p></td>
                                    <td>Github 보러가기</td>
                                </tr>
                                <tr>
                                    <td className='flex gap-1 text-blue-600'>&gt;
                                        <p onClick={() => {executeCommand('video'); setInputValue('')}} className="cursor-pointer hover:underline">video</p></td>
                                    <td>구현영상 보러가기</td>
                                </tr>
                                <tr>
                                    <td className='flex gap-1 text-blue-600'>&gt;
                                        <p onClick={() => {executeCommand('paper'); setInputValue('')}} className="cursor-pointer hover:underline">paper</p></td>
                                    <td>학술지 보러가기</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='h-[1px] bg-[#2B2B2B] absolute left-0 right-0 bottom-[3px] z-10'/>
                </div>
            </div>
        </div>
    );
};

export default Prompt;
