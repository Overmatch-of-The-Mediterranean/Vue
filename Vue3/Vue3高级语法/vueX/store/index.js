import { createStore } from 'vuex'



// vueX数据管理框架
// vueX创建一个全局唯一的仓库，存放全局数据
export default createStore({
  state: {
    name: 'dell'
  },
  getters: {
  },
  mutations: {
    // commit和mutations关联
    // mutations里面只允许写同步的代码，不允许异步代码，不会强制报错
    // mutations里面的方法可以接收两个参数，第一是存储全局数据的对象，第二个是传递过来的数据
    change(state, str) {
      console.log(state);
      // this.state.name = str;
      state.name = str;
    }
  },
  actions: {
    // dispatch和actions关联
    // actions里面的方法可以接收两个参数，第一个store，第二个是传递过来的数据
    // actions用来写异步逻辑
    change(store, str) {
      console.log(store);
      setTimeout(() => {
        // this.commit('change', str);
        store.commit('change', str);
      }, 2000);
    }
  },

  // 对store进行局部拆分的功能点
  modules: {
  }
})
