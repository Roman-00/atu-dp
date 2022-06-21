import axios from 'axios';

const url = 'https://atu-edu-default-rtdb.firebaseio.com/schedule.json';

export default {
    state: {
        schedule: [],
    },
    mutations: {
        setScheduleToState: (state, responce) => {
            state.schedule = responce;
        },
    },
    actions: {
        getSchedule({ commit }) {
            return axios.get(url, {
                method: 'GET',
            })
                .then((responce) => {
                    if (responce.status === 200) {
                        commit('setScheduleToState', responce.data);
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
        allSchedule(state) {
            return state.schedule;
        },
    },
};
