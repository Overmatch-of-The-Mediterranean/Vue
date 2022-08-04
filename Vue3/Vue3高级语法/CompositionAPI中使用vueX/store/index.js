import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    name: 'dell'
  },
  getters: {
  },
  mutations: {

    changeName(state, str) {
      state.name = str;
    }
  },
  actions: {
    getData(store) {
      axios.get('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register')
        .then(res => {
          console.log(res);
          const data = res.data.desc;
          store.commit('changeName', data);
        })
    }
  },


  modules: {
  }
})
