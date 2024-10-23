import React from 'react';
import Layout from '../component/public/Layout';
import { useRecoilValue } from 'recoil';
import {TabListState} from '../recoil/state'
import Profile from '../component/contents/Profile';

const MainPage = () => {
    const tabList = useRecoilValue(TabListState);

    return (
        <div>
            <Layout>

            </Layout>
        </div>
    );
};

export default MainPage;