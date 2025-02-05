import React, { useEffect } from 'react';
import LineNumbers from '../public/LineNumbers';
import '../../style/aboutStyle.css';
import IMG_CVPHOTO from '../../image/cv_photo.jpg';

const About = () => {
    useEffect(() => {
        const cursorDiv = document.querySelector('.cursor-div');
        const valueElement = document.querySelector('.img');

        // 이미지 보이기
        const handleMouseEnter = () => {
            cursorDiv.classList.add('show'); // show 클래스 추가
        };
        
        // 이미지 숨기기
        const handleMouseLeave = () => {
            cursorDiv.classList.remove('show'); // show 클래스 제거 
        };

         // 마우스 트래킹
         const handleMouseMove = (e) => {
            cursorDiv.style.left = `${e.pageX - cursorDiv.offsetWidth / 2 + 110}px`;
            cursorDiv.style.top = `${e.pageY - cursorDiv.offsetHeight / 2 + 150}px`;
            
        };

        // 이벤트 리스너 등록
        if (valueElement) {
            valueElement.addEventListener('mouseenter', handleMouseEnter);
            valueElement.addEventListener('mouseleave', handleMouseLeave);
            document.addEventListener('mousemove', handleMouseMove);
        }

        // 이벤트 리스터 해제
        return () => {
            if (valueElement) {
                valueElement.removeEventListener('mouseenter', handleMouseEnter);
                valueElement.removeEventListener('mouseleave', handleMouseLeave);
                document.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <div className='flex h-fit text-[20px] font-consolas text-[#c1cccc] text-nowrap'>
            <LineNumbers lines={61} />
            <div>
                <div>
                    <span className='syntax'>&lt;!</span>
                    <span className='type'>DOCTYPE</span>
                    <span className='key'> html</span>
                    <span className='syntax'>&gt;</span>
                </div>
                <div className='span-group'>
                    <span className='syntax'>&lt;</span>
                    <span className='type'>html</span>
                    <span className='key'> lang</span>
                    <span className='syntax'>=</span>
                    <span className='value'>"ko"</span>
                    <span className='syntax'>&gt;</span>

                    <div className=''>
                        <span className='syntax'>&lt;</span>
                        <span className='type'>head</span>
                        <span className='syntax'>&gt;</span>

                        <div>
                            <span className='syntax'>&lt;</span>
                            <span className='type'>title</span>
                            <span className='syntax'>&gt;</span>
                            <div>
                                <span className='syntax'>&lt;</span>
                                <span className='type'>img</span>
                                <span className='key'> src</span>
                                <span className='syntax'>=</span>
                                <span className='value img underline cursor-pointer'>
                                    './img/cv_photo.png'
                                </span>
                                <span className='key'> alt</span>
                                <span className='syntax'>=</span>
                                <span className='value font-kr'>'프로필 사진'</span>
                                <span className='syntax'>/&gt;</span>
                            </div>
                            <div className='font-kr'>
                                <span>안녕하세요, 풀스택 개발자 왕건입니다.</span>
                            </div>
                        </div>
                        <div className=''>
                            <span className='syntax'>&lt;/</span>
                            <span className='type'>title</span>
                            <span className='syntax'>&gt;</span>
                        </div>
                    </div>

                    <div className=''>
                        <span className='syntax'>&lt;/</span>
                        <span className='type'>head</span>
                        <span className='syntax'>&gt;</span>
                    </div>

                    <div className='span-group'>
                        <span className='syntax'>&lt;</span>
                        <span className='type'>body</span>
                        <span className='syntax'>&gt;</span>

                        <div>
                            <span className='syntax'>&lt;</span>
                            <span className='type'>div</span>
                            <span className='key'> class</span>
                            <span className='syntax'>=</span>
                            <span className='value font-kr font-semibold'>'자기소개'</span>
                            <span className='syntax'>&gt;</span>

                            <div className='font-kr flex flex-col'>
                                <div className='!-ml-[30px] flex flex-col border-l-[2px] border-[#404040] pl-[20px]'>
                                    <span>
                                        안녕하세요!
                                        <br/>저는 개발의 왕이 되고 싶은 왕건입니다!
                                    </span>
                                    <span>
                                        프론트엔드와 백엔드 모두에 깊은 관심을 가지고 있으며, 기술과 창의력을 결합하여 다양한 문제를 해결하는 것을 좋아합니다.<br/>새로운 기술과 트렌드를 적극적으로 학습하고 적용하는 것을 좋아하며, 최근에는 AI에 대한 관심이 생겨 AI와 웹을 결합한 서비스를 개발하고자 합니다.
                                        
                                        <br/>특히 자연어 처리와 이미지 인식 등의 분야에 관심이 있으며, 이를 웹 개발에 적용하여 사용자에게 더욱 편리하고 유용한 서비스를 제공하고자 합니다.

                                        <br/>이를 위해 Node.js와 MongoDB를 이용한 서버 개발을 공부하고 있으며, Python과 TensorFlow 등의 AI 라이브러리도 함께 학습하고 있습니다.
                                    </span>
                                    <br />
                                    <span>
                                        저의 장점은 빠른 습득력과 더 나은 결과물을 위해 절대 포기하지 않고 끝까지 노력하는 것입니다.
                                    </span>
                                    <span>
                                        방학 동안 '브이드림'에서 프론트엔드 개발자로 일하며 React와 RESTful API를 사용해 내부 관리 시스템을 개발한 경험이 있습니다. 
                                    </span>
                                    <span>
                                        해당 프로젝트에서는 사용자의 요구사항을 파악하고, 이를 바탕으로 시스템을 설계하고 구현하는 과정에서 많은 어려움을 겪었습니다.
                                    </span>
                                    <span>
                                        하지만 저는 포기하지 않고 끝까지 노력했습니다. 문제를 해결하기 위해 다양한 방법을 시도하고, 다른 사람들의 조언을 구하며, <br/>제 자신의 부족한 점을 보완하기 위해 노력하여 프로젝트에 기여할 수 있었습니다. <br/>이 경험은 저에게 큰 자신감을 주었고, 앞으로 더 나은 개발자가 되기 위한 동기부여가 되었습니다.
                                    </span>
                                    <br />
                                    <span>
                                        앞으로도 지속적인 학습과 경험을 통해 더욱 뛰어난 개발자가 되기 위해 노력할 것입니다.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <span className='syntax'>&lt;/</span>
                            <span className='type'>div</span>
                            <span className='syntax'>&gt;</span>
                        </div>
                    </div>

                    <div className='span-group'>
                        <span className='syntax'>&lt;</span>
                        <span className='type'>body</span>
                        <span className='syntax'>&gt;</span>

                        <div>
                            <span className='syntax'>&lt;</span>
                            <span className='type'>div</span>
                            <span className='key'> class</span>
                            <span className='syntax'>=</span>
                            <span className='value font-kr font-semibold'>'스킬'</span>
                            <span className='syntax'>&gt;</span>

                            <div className='font-kr'>
                                <div className='!-ml-[30px] flex flex-col border-l-[2px] border-[#404040] pl-[20px]'>
                                    <span className='font-semibold text-white'>🔨 Frontend</span>
                                    <div className='ml-[30px] flex flex-col'>
                                        <span>- HTML, CSS, JavaScript, React, Bootstrap</span>
                                    </div>
                                    <br />
                                    <span className='font-semibold text-white'>🔧 Backend</span>
                                    <div className='ml-[30px] flex flex-col'>
                                        <span>- Java, C#, C, Python, JSP, Spring Boot, MySQL, OracleDB, MariaDB, Firebase</span>
                                    </div>
                                    <br />
                                    <span className='font-semibold text-white'>🛠️ Tools</span>
                                    <div className='ml-[30px] flex flex-col'>
                                        <span>- Git, Notion, Postman, VS, VSCode, Eclipse, Figma, AWS, Linux</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <span className='syntax'>&lt;/</span>
                            <span className='type'>div</span>
                            <span className='syntax'>&gt;</span>
                        </div>
                    </div>

                    <div className='span-group'>
                        <div>
                            <span className='syntax'>&lt;</span>
                            <span className='type'>div</span>
                            <span className='key'> class</span>
                            <span className='syntax'>=</span>
                            <span className='value font-kr font-semibold'>'학력 및 경력'</span>
                            <span className='syntax'>&gt;</span>

                            <div className='font-kr flex flex-col'>
                                <div className='!-ml-[30px] flex flex-col border-l-[2px] border-[#404040] pl-[20px]'>
                                    <span className='font-semibold text-white'>🏫 학력</span>
                                    <div className='ml-[30px] flex flex-col'>
                                        <div>
                                            <span className='underline decoration-[#c1cccc]' href='https://www.vdream.co.kr/' target='__brank'>군자디지털과학고등학교</span>
                                            <span className='italic'> (~2020.02)</span>
                                        </div>
                                        <div className='ml-[20px] flex flex-col'>
                                            <span>- 디지털전자과</span>
                                        </div>

                                        <div>
                                            <span className='underline decoration-[#c1cccc]' href='https://www.vdream.co.kr/' target='__brank'>인하공업전문대학</span>
                                            <span className='italic'> (~2025.02)</span>
                                        </div>
                                        <div className='ml-[20px] flex flex-col'>
                                            <span>- 컴퓨터정보공학과</span>
                                        </div>

                                        <div>
                                            <span className='underline decoration-[#c1cccc]' href='https://www.vdream.co.kr/' target='__brank'>인하공업전문대학</span>
                                            <span className='italic'> (2025.03~재학)</span>
                                        </div>
                                        <div className='ml-[20px] flex flex-col'>
                                            <span>- 컴퓨터정보공학과(심화)</span>
                                        </div>
                                    </div>
                                    <br />
                                    <span className='font-semibold text-white'>📇 경력</span>
                                    <div className='ml-[30px] flex flex-col'>
                                        <div>
                                            <a className='underline decoration-[#c1cccc]' href='https://www.vdream.co.kr/' target='__brank'>브이드림</a>
                                            <span className='italic'> (2024.08~2024.10)</span>
                                        </div>
                                        <div className='ml-[20px] flex flex-col'>
                                            <span>- 프리랜서</span>
                                            <span>- 나무컨벤션 홈페이지 구축 ('Imweb' 플랫폼)</span>
                                            <span>- 내부관리시스템 프론트엔드 (React)</span>
                                        </div>
                                        <div>
                                            <a className='underline decoration-[#c1cccc]' href='https://www.vdream.co.kr/' target='__brank'>브이드림</a>
                                            <span className='italic'> (2025.01~재직)</span>
                                        </div>
                                        <div className='ml-[20px] flex flex-col'>
                                            <span>- 정규직 전환형 인턴</span>
                                            <span>- 내부관리시스템 풀스택 (React, FastAPI)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <span className='syntax'>&lt;/</span>
                            <span className='type'>div</span>
                            <span className='syntax'>&gt;</span>
                        </div>
                    </div>

                    <div className='span-group'>
                        <div>
                            <span className='syntax'>&lt;</span>
                            <span className='type'>div</span>
                            <span className='key'> class</span>
                            <span className='syntax'>=</span>
                            <span className='value font-kr font-semibold'>'자격증'</span>
                            <span className='syntax'>&gt;</span>

                            <div className='font-kr flex flex-col !-ml-0  border-l-[2px] border-[#404040]'>
                                <div>
                                    <span>
                                        정보처리 산업기사
                                    </span>
                                    <span className='italic'> (2024.09.10)</span>
                                </div>
                                <div>
                                    <span>
                                    전자계산기 기능사
                                    </span>
                                    <span className='italic'> (2019.06.21)</span>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <span className='syntax'>&lt;/</span>
                            <span className='type'>div</span>
                            <span className='syntax'>&gt;</span>
                        </div>
                    </div>

                    <div className=''>
                        <span className='syntax'>&lt;/</span>
                        <span className='type'>body</span>
                        <span className='syntax'>&gt;</span>
                    </div>
                    
                </div>
                <div className=''>
                    <span className='syntax'>&lt;/</span>
                    <span className='type'>html</span>
                    <span className='syntax'>&gt;</span>
                </div>
            </div>

            {/* 마우스 트래킹 div */}
            <div className="cursor-div">
                <img src={IMG_CVPHOTO} alt="IMG_CVPHOTO"/>
            </div>
        </div>
    );
};

export default About;
