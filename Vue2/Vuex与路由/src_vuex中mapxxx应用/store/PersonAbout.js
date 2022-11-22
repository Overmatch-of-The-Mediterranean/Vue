import { nanoid } from "nanoid"
export default {
    namespaced: true,
    state: {
        personList: [{ id: nanoid(), name: '张三' }]
    },
    actions: {},
    mutations: {
        addPerson(state, value) {
            state.personList.unshift(value)
        }
    },
    getters: {
        personSum(state) {
            return state.personList.length
        },
        firstName(state) {
            return state.personList[0].name
        }
    }
}