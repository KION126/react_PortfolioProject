import { atom, selector } from 'recoil';

export const TabListState = atom({
    key: 'TabListState',
    default: 0,
    effects: [
        ({ setSelf, onSet }) => {
            // recoil이 호출될 때 sessionStorage에서 상태를 가져와서 설정
            const value = Number(sessionStorage.getItem('selectedTabs')) || [];
            setSelf(value);

            //  recoil의 값이 변경 될 때 해당 값을 sessionStorage에 저장
            onSet((state) => {
                sessionStorage.setItem('selectedTabs', state);
            });
        },
    ],
});
