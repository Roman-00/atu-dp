import { createStore } from 'vuex';

import auth from '@/store/auth';
import schedule from '@/store/schedule';
import post from '@/store/post';
import user from '@/store/user';

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        post,
        schedule,
        user,
    },
});
