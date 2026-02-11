import React, { useEffect } from "react";
import LineNumbers from "../public/LineNumbers";
import "../../style/aboutStyle.css";
import IMG_CVPHOTO from "../../image/cv_photo.jpg";

const About = () => {
  useEffect(() => {
    const cursorDiv = document.querySelector(".cursor-div");
    const valueElement = document.querySelector(".img");

    // 이미지 보이기
    const handleMouseEnter = () => {
      cursorDiv.classList.add("show"); // show 클래스 추가
    };

    // 이미지 숨기기
    const handleMouseLeave = () => {
      cursorDiv.classList.remove("show"); // show 클래스 제거
    };

    // 마우스 트래킹
    const handleMouseMove = (e) => {
      cursorDiv.style.left = `${e.pageX - cursorDiv.offsetWidth / 2 + 110}px`;
      cursorDiv.style.top = `${e.pageY - cursorDiv.offsetHeight / 2 + 150}px`;
    };

    // 이벤트 리스너 등록
    if (valueElement) {
      valueElement.addEventListener("mouseenter", handleMouseEnter);
      valueElement.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mousemove", handleMouseMove);
    }

    // 이벤트 리스터 해제
    return () => {
      if (valueElement) {
        valueElement.removeEventListener("mouseenter", handleMouseEnter);
        valueElement.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="flex h-fit text-[20px] font-consolas text-[#c1cccc] text-nowrap leading-[29.6px]">
      <LineNumbers lines={60} />
      <div>
        <div>
          <span className="syntax">&lt;!</span>
          <span className="type">DOCTYPE</span>
          <span className="key"> html</span>
          <span className="syntax">&gt;</span>
        </div>
        <div className="span-group">
          <span className="syntax">&lt;</span>
          <span className="type">html</span>
          <span className="key"> lang</span>
          <span className="syntax">=</span>
          <span className="value">"ko"</span>
          <span className="syntax">&gt;</span>

          <div className="">
            <span className="syntax">&lt;</span>
            <span className="type">head</span>
            <span className="syntax">&gt;</span>

            <div>
              <span className="syntax">&lt;</span>
              <span className="type">title</span>
              <span className="syntax">&gt;</span>
              <div>
                <span className="syntax">&lt;</span>
                <span className="type">img</span>
                <span className="key"> src</span>
                <span className="syntax">=</span>
                <span className="value img underline cursor-pointer">
                  './img/cv_photo.png'
                </span>
                <span className="key"> alt</span>
                <span className="syntax">=</span>
                <span className="value font-kr">'프로필 사진'</span>
                <span className="syntax">/&gt;</span>
              </div>
            </div>
            <div className="">
              <span className="syntax">&lt;/</span>
              <span className="type">title</span>
              <span className="syntax">&gt;</span>
            </div>
          </div>

          <div className="">
            <span className="syntax">&lt;/</span>
            <span className="type">head</span>
            <span className="syntax">&gt;</span>
          </div>

          <div className="span-group">
            <span className="syntax">&lt;</span>
            <span className="type">body</span>
            <span className="syntax">&gt;</span>

            <div>
              <span className="syntax">&lt;</span>
              <span className="type">div</span>
              <span className="key"> class</span>
              <span className="syntax">=</span>
              <span className="value font-kr font-semibold">'자기소개'</span>
              <span className="syntax">&gt;</span>

              <div className="font-kr flex flex-col">
                <div className="!-ml-[30px] flex flex-col border-l-[2px] border-[#404040] pl-[20px]">
                  <span>
                    안녕하세요. 다양한 분야의 지식을 융합해 새로운 가치를
                    만들어가는 풀스택 개발자 왕건입니다.
                    <br />
                    <br />
                    현재 한양대학교 인공지능융합학과 석·박사 통합 과정에 재학
                    중이며,
                    <br />
                    시·청 및 촉각, 센서 및 인간 행동 데이터를 비롯한 다중 감각
                    데이터를 활용하는 인공지능 알고리즘과,
                    <br />
                    이를 기반으로 하는 인간-인공지능 상호작용 시스템을 연구하는
                    MILab에서 유용재 교수님의 지도 아래 연구를 수행하고
                    있습니다.
                    <br />
                    <br />
                    사람의 의도와 감정을 다각도로 이해하고 반응할 수 있는
                    인공지능을 연구하여,
                    <br />
                    사용자가 작업 과정에서 느끼는 불편함을 최소화하고, 보다
                    자연스럽게 AI의 도움을 받을 수 있는 환경을 구축하고자
                    합니다.
                    <br />
                    <br />
                    특히, 장애인 재택근무 시스템과 같은 실제 산업 현장에
                    멀티모달 AI 기술을 적용하여
                    <br />
                    사용자의 상황과 의도를 파악하고 능동적으로 지원하는 사람
                    중심의 인터랙션 시스템을 구현하는 것이 목표입니다.
                    <br />
                    이를 통해 AI가 인간의 능력과 경험을 확장시키는
                    Human-centered AI 실현에 기여하고자 합니다.
                  </span>
                </div>
              </div>
            </div>

            <div className="">
              <span className="syntax">&lt;/</span>
              <span className="type">div</span>
              <span className="syntax">&gt;</span>
            </div>
          </div>

          <div className="span-group">
            <span className="syntax">&lt;</span>
            <span className="type">body</span>
            <span className="syntax">&gt;</span>

            <div>
              <span className="syntax">&lt;</span>
              <span className="type">div</span>
              <span className="key"> class</span>
              <span className="syntax">=</span>
              <span className="value font-kr font-semibold">'스킬'</span>
              <span className="syntax">&gt;</span>

              <div className="font-kr">
                <div className="!-ml-[30px] flex flex-col border-l-[2px] border-[#404040] pl-[20px]">
                  <span className="font-semibold text-white">🪛 AI/ML</span>
                  <div className="ml-[30px] flex flex-col">
                    <span>
                      - TensorFlow, PyTorch, scikit-learn, OpenCV,
                      Fine-Tuning(BERT, ResNet), NLP, Image Classification
                    </span>
                  </div>
                  <br />
                  <span className="font-semibold text-white">🔨 Frontend</span>
                  <div className="ml-[30px] flex flex-col">
                    <span>- HTML, CSS, JavaScript, React, Bootstrap</span>
                  </div>
                  <br />
                  <span className="font-semibold text-white">🔧 Backend</span>
                  <div className="ml-[30px] flex flex-col">
                    <span>
                      - Java, C#, C, Python, JSP, Spring Boot, MySQL, OracleDB,
                      MariaDB, Firebase
                    </span>
                  </div>
                  <br />
                  <span className="font-semibold text-white">🛠️ Tools</span>
                  <div className="ml-[30px] flex flex-col">
                    <span>
                      - Git, Notion, Postman, VS, VSCode, Eclipse, Figma, AWS,
                      Linux
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <span className="syntax">&lt;/</span>
              <span className="type">div</span>
              <span className="syntax">&gt;</span>
            </div>
          </div>

          <div className="span-group">
            <div>
              <span className="syntax">&lt;</span>
              <span className="type">div</span>
              <span className="key"> class</span>
              <span className="syntax">=</span>
              <span className="value font-kr font-semibold">
                '학력 및 경력'
              </span>
              <span className="syntax">&gt;</span>

              <div className="font-kr flex flex-col">
                <div className="!-ml-[30px] flex flex-col border-l-[2px] border-[#404040] pl-[20px]">
                  <span className="font-semibold text-white">🏫 학력</span>
                  <div className="ml-[30px] flex flex-col">
                    <div>
                      <a
                        className="underline decoration-[#c1cccc]"
                        href="https://www.inhatc.ac.kr/"
                        target="__brank"
                      >
                        인하공업전문대학
                      </a>
                      <span className="italic"> (~2025.02)</span>
                    </div>
                    <div className="ml-[20px] flex flex-col">
                      <span>- 컴퓨터정보공학과</span>
                    </div>

                    <div>
                      <a
                        className="underline decoration-[#c1cccc]"
                        href="https://www.inhatc.ac.kr/"
                        target="__brank"
                      >
                        인하공업전문대학
                      </a>
                      <span className="italic"> (~2026.02)</span>
                    </div>
                    <div className="ml-[20px] flex flex-col">
                      <span>- 컴퓨터정보공학과 (학사 과정)</span>
                    </div>
                    <div>
                      <a
                        className="underline decoration-[#c1cccc]"
                        href="https://www.hanyang.ac.kr/"
                        target="__brank"
                      >
                        한양대학교
                      </a>
                      <span className="italic"> (2026.01 ~ 재학)</span>
                    </div>
                    <div className="ml-[20px] flex flex-col">
                      <span>- 인공지능융합학과 (석·박사 통합 과정)</span>
                      <span>
                        -{" "}
                        <a
                          className="underline decoration-[#c1cccc]"
                          href="https://sites.google.com/view/hyu-milab/"
                          target="__brank"
                        >
                          MILab(Multimodal Intelligence and Interaction Group)
                        </a>
                      </span>
                    </div>
                  </div>
                  <br />
                  <span className="font-semibold text-white">📇 경력</span>
                  <div className="ml-[30px] flex flex-col">
                    <div>
                      <a
                        className="underline decoration-[#c1cccc]"
                        href="https://www.vdream.co.kr/"
                        target="__brank"
                      >
                        브이드림
                      </a>
                      <span className="italic"> (2024.08~2024.10)</span>
                    </div>
                    <div className="ml-[20px] flex flex-col">
                      <span>- 나무컨벤션 홈페이지 구축 ('Imweb' 플랫폼)</span>
                      <span>- 내부관리시스템 프론트엔드 개발(React)</span>
                    </div>
                    <div>
                      <a
                        className="underline decoration-[#c1cccc]"
                        href="https://www.vdream.co.kr/"
                        target="__brank"
                      >
                        브이드림
                      </a>
                      <span className="italic"> (2025.01~2026.01)</span>
                    </div>
                    <div className="ml-[20px] flex flex-col">
                      <span>
                        - 내부관리시스템 풀스택 개발 및 유지보수(React, FastAPI)
                      </span>
                      <span>
                        - 장애인 재택근무 시스템 '플립' 풀스택 개발 및
                        유지보수(Node.js)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <span className="syntax">&lt;/</span>
              <span className="type">div</span>
              <span className="syntax">&gt;</span>
            </div>
          </div>

          <div className="span-group">
            <div>
              <span className="syntax">&lt;</span>
              <span className="type">div</span>
              <span className="key"> class</span>
              <span className="syntax">=</span>
              <span className="value font-kr font-semibold">'자격증'</span>
              <span className="syntax">&gt;</span>

              <div className="font-kr flex flex-col !-ml-0  border-l-[2px] border-[#404040]">
                <div>
                  <span>정보처리 산업기사</span>
                  <span className="italic"> (2024.09.10)</span>
                </div>
                <div>
                  <span>전자계산기 기능사</span>
                  <span className="italic"> (2019.06.21)</span>
                </div>
              </div>
            </div>

            <div className="">
              <span className="syntax">&lt;/</span>
              <span className="type">div</span>
              <span className="syntax">&gt;</span>
            </div>
          </div>

          <div className="">
            <span className="syntax">&lt;/</span>
            <span className="type">body</span>
            <span className="syntax">&gt;</span>
          </div>
        </div>
        <div className="">
          <span className="syntax">&lt;/</span>
          <span className="type">html</span>
          <span className="syntax">&gt;</span>
        </div>
      </div>

      {/* 마우스 트래킹 div */}
      <div className="cursor-div">
        <img src={IMG_CVPHOTO} alt="IMG_CVPHOTO" />
      </div>
    </div>
  );
};

export default About;
