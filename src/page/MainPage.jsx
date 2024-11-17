import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import Layout from '../component/public/Layout';
import { useRecoilValue } from 'recoil';
import { SelectedTabState, SearchKeywordState } from '../recoil/state';

const MainPage = () => {
    const selectedTab = useRecoilValue(SelectedTabState);
    const searchKeyword = useRecoilValue(SearchKeywordState);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const selectedTabFile = selectedTab !== null ? selectedTab.split('.')[0] : null;

    // 선택된 탭에 따라 컴포넌트를 동적으로 로딩
    // 리랜더링 문제를 해결하기 위해 useMemo 사용
    const SelectTabComponent = useMemo(() => {
        if(selectedTabFile == null) return null;

        return lazy(() =>
            import(`../component/contents/${selectedTabFile}`)
        );
    }, [selectedTabFile]);

    // 창 크기 변경 시
    const handleResize = () => {
        // windowWidth 업데이트
        setWindowWidth(window.innerWidth);
    }

    // 브라우저 창 크기 감지
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        // 컴포넌트 언마운트 시 이벤트 리스너 삭제
        return () => {
          window.removeEventListener('resize', handleResize)
        }
    }, [windowWidth])

    return (
        <div>
            <Layout>
                    {/* 선택된 탭에 따라 동적으로 로딩 */}
                    {SelectTabComponent  && 
                        <Suspense>
                            <SelectTabComponent 
                                windowWidth = {windowWidth}
                                searchKeyword={searchKeyword}
                            />
                        </Suspense>
                    }
            </Layout>
        </div>
    );
};

export default MainPage;