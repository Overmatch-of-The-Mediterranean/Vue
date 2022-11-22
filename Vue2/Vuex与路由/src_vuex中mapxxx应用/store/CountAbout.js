export default {
    namespaced: true,
    state: {
        sum: 0
    },
    actions: {
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
    },
    mutations: {
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
        }
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}