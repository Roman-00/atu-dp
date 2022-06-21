import axios from 'axios';

const url = 'https://atu-edu-default-rtdb.firebaseio.com/user.json';

export default {
    state: {
        user: {},
    },
    mutations: {
        setUserInfoToState: (state, responce) => {
            state.user = responce;
        },
    },
    actions: {
        /**
         * Получаем данные user
         */
        getUserInfo({ commit }) {
            return axios.get(url, {
                method: 'GET',
            })
                .then((responce) => {
                    if (responce.status === 200) {
                        commit('setUserInfoToState', responce.data);
                    } else {
                        throw new Error(`Could not fetch ${url}, status: ${responce.status}`);
                    }
                })
                .catch((error) => {
                    throw new Error(`Server Not a Found: ${error}`);
                });
        },
    },
    getters: {
        userInfo(state) {
            return state.user;
        },
    },
};
