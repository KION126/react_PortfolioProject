import { atom } from 'recoil';

// Explorer, TopMenu에서 사용하는 선택한 메뉴 리스트 상태
export const TabListState = atom({
    key: 'TabListState',
    default: [{'title':'Welcome', 'icon':'logo'}],
    effects: [
        ({ setSelf, onSet }) => {
            // sessionStorage에서 데이터 가져올 때 배열로 변환
            const savedTabs = sessionStorage.getItem('tabList');
            if (savedTabs) {
                try {
                    setSelf(JSON.parse(savedTabs));
                } catch (error) {
                    console.error("저장된 탭을 파싱하는데 실패:", error);
                    setSelf([]); // 파싱 실패 시 빈 배열로 설정
                }
            }

            //  recoil의 값이 변경 될 때 해당 값을 sessionStorage에 저장
            onSet((state) => {
                sessionStorage.setItem('tabList', JSON.stringify(state));
            });
        },
    ],
});

// ExplorerItem에서 사용하는 open된 폴더 리스트 상태
export const OpenForderListState = atom({
    key: 'OpenForderListState',
    default: [],
    effects: [
        ({ setSelf, onSet }) => {
            // sessionStorage에서 데이터 가져올 때 배열로 변환
            const savedTabs = sessionStorage.getItem('openForderList');
            if (savedTabs) {
                try {
                    setSelf(JSON.parse(savedTabs));
                } catch (error) {
                    console.error("저장된 오픈된 폴더 리스트 파싱 실패:", error);
                    setSelf([]); // 파싱 실패 시 빈 배열로 설정
                }
            }

            //  recoil의 값이 변경 될 때 해당 값을 sessionStorage에 저장
            onSet((state) => {
                sessionStorage.setItem('openForderList', JSON.stringify(state));
            });
        },
    ],
});

// Explorer, TopMenu, MainPage에서 사용하는 현재 선택한 탭(열려있는 탭) 상태
export const SelectedTabState = atom({
    key: 'SelectedTabState',
    default: "Welcome",
    effects: [
        ({ setSelf, onSet }) => {
            // sessionStorage에서 데이터 가져올 때 배열로 변환
            const savedTabs = sessionStorage.getItem('selectedTab');
            if (savedTabs) {
                try {
                    setSelf(JSON.parse(savedTabs));
                } catch (error) {
                    console.error("저장된 선택된 탭 파싱 실패", error);
                    setSelf(null); // 파싱 실패 시 null로 설정
                }
            }

            //  recoil의 값이 변경 될 때 해당 값을 sessionStorage에 저장
            onSet((state) => {
                sessionStorage.setItem('selectedTab', JSON.stringify(state));
            });
        },
    ],
});

// SideToolbar, Explorer에서 사용하는 현재 선택한 탭(열려있는 탭) 상태
export const SelectedSideState = atom({
    key: 'SelectedSideState',
    default: "Explorer",
    effects: [
        ({ setSelf, onSet }) => {
            // sessionStorage에서 데이터 가져올 때 배열로 변환
            const savedTabs = sessionStorage.getItem('selectedSide');
            if (savedTabs) {
                try {
                    setSelf(JSON.parse(savedTabs));
                } catch (error) {
                    console.error("저장된 선택된 사이드 탭 파싱 실패:", error);
                    setSelf(null); // 파싱 실패 시 null로 설정
                }
            }

            //  recoil의 값이 변경 될 때 해당 값을 sessionStorage에 저장
            onSet((state) => {
                sessionStorage.setItem('selectedSide', JSON.stringify(state));
            });
        },
    ],
});

// Search, 각 페이지에서 사용하는 검색 키워드 상태
export const SearchKeywordState = atom({
    key: 'SearchKeyword',
    default: null,
    effects: [
        ({ setSelf, onSet }) => {
            // sessionStorage에서 데이터 가져올 때 배열로 변환
            const savedTabs = sessionStorage.getItem('searchKeyword');
            if (savedTabs) {
                try {
                    setSelf(JSON.parse(savedTabs));
                } catch (error) {
                    console.error("저장된 검색 키워드 파싱 실패:", error);
                    setSelf(null); // 파싱 실패 시 null로 설정
                }
            }

            //  recoil의 값이 변경 될 때 해당 값을 sessionStorage에 저장
            onSet((state) => {
                sessionStorage.setItem('searchKeyword', JSON.stringify(state));
            });
        },
    ],
});