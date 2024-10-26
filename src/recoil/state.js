import { atom, selector } from 'recoil';

export const TabListState = atom({
    key: 'TabListState',
    default: 0,
    effects: [
        ({ setSelf, onSet }) => {
            // sessionStorage에서 데이터 가져올 때 배열로 변환
            const savedTabs = sessionStorage.getItem('selectedTabs');
            if (savedTabs) {
                try {
                    setSelf(JSON.parse(savedTabs));
                } catch (error) {
                    console.error("저장된 탭을 파싱하는데 실패했습니다:", error);
                    setSelf([]); // 파싱 실패 시 빈 배열로 설정
                }
            }

            //  recoil의 값이 변경 될 때 해당 값을 sessionStorage에 저장
            onSet((state) => {
                sessionStorage.setItem('selectedTabs', JSON.stringify(state));
            });
        },
    ],
});

export const SelectedTabState = atom({
    key: 'SelectedTabState',
    default: 0,
    effects: [
        ({ setSelf, onSet }) => {
            // recoil이 호출될 때 sessionStorage에서 상태를 가져와서 설정
            const value = String(sessionStorage.getItem('selectedTab')) || 0;
            setSelf(value);

            //  recoil의 값이 변경 될 때 해당 값을 sessionStorage에 저장
            onSet((state) => {
                sessionStorage.setItem('selectedTab', state);
            });
        },
    ],
});