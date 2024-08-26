import { createStore } from 'vuex'


const store = createStore({
    state() {
        return {
            user: null, // 저장할 state작성
        }
    },

    //계산, 필터링 및 가공된 값을 반환
    getters: {
        // 사용자 ID
        user: (state) => {
            return state.user.filter(user => 'id');
        },
    },

    // 컴포넌트에서 store의 state를 수정 할 때 사용하는 메서드
    mutations: {
        //객체를 수정할 때 
        setObject(state, { key, value }) {
            state[key] = value;
        },

        //기본 변수를 수정할
        setState(state, payload) {
            state.user = payload;
        },
    },

    //서버호출 or mutation 비동기작업할 때 사용하는 메서드 
    actions: {
        // mutations obj함수 수정
        setMutationObj({ commit }, obj) {
            commit('setObject', { key: 'user', value: obj });
        },

        // mutations state함수 수정
        setMutationState({ commit }, state) {
            commit('setState', state);
        },
    },
})

export default store;