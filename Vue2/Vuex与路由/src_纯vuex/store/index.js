import Vue from 'vue';
import Vuex from 'vuex'
import { nanoid } from 'nanoid'
Vue.use(Vuex)

const actions = {
    jia(context, value) {
        context.commit('JIA', value);
    },
    minus(context, value) {
        context.commit('MINUS', value);
    },
    waitAdd(context, value) {
        setTimeout(() => {
            context.commit('WAit', value)
        }, 500);
    }
}

const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    MINUS(state, value) {
        state.sum -= value
    },
    WAit(state, value) {
        state.sum += value;
    },
    ODDADD(state, value) {
        if (state.sum % 2) {
            state.sum += value
        }
    },
    addPerson(state, value) {
        state.personList.unshift(value)
    }
}

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

const state = {
    sum: 0,
    personList: [{ id: nanoid(), name: '张三' }]
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})