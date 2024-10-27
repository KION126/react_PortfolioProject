import React, { lazy, Suspense, useMemo } from 'react';
import Layout from '../component/public/Layout';
import { useRecoilValue } from 'recoil';
import { SelectedTabState } from '../recoil/state';

const MainPage = () => {
    const selectedTab = useRecoilValue(SelectedTabState);

    const selectedTabFile = selectedTab != null ? selectedTab.split('.')[0] : "Welcome";

    // 선택된 탭에 따라 컴포넌트를 동적으로 로딩
    // 무한 랜더링 문제를 해결하기 위해 useMemo 사용
    const SelectTabComponent = useMemo(() => {
        return lazy(() =>
            import(`../component/contents/${selectedTabFile}`)
        );
    }, [selectedTabFile]);

    return (
        <div>
            <Layout>
                    {/* 선택된 탭에 따라 동적으로 로딩 
                    - Suspense: 로딩 중일 때 보여줄 컴포넌트 */}
                    <Suspense fallback={<div>Loading...</div>}>
                        <SelectTabComponent />
                    </Suspense>
            </Layout>
        </div>
    );
};

export default MainPage;