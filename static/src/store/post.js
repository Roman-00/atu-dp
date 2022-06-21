import axios from 'axios';

const url = 'https://atu-edu-default-rtdb.firebaseio.com/posts.json';

export default {
    state: {
        posts: [],
    },
    mutations: {
        /**
         * Записываем данные в state
         * @param {Object} state
         * @param {Array} responce
         */
        setPostsToState: (state, responce) => {
            state.posts = responce;
        },
    },
    actions: {
        /**
         * Получаем посты с сайта
         * @param commit
         */
        getPosts({ commit }) {
            return axios.get(`${url}`, {
                method: 'GET',
            })
                .then((responce) => {
                    if (responce.status === 200) {
                        commit('setPostsToState', responce.data);
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
        /**
         * Возвращаем посты для отрисовки
         *
         * @param {Array} state
         */
        allPosts(state) {
            return state.posts;
        },
    },
};
