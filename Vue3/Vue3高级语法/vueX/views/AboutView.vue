<template>
  <div class="about">
    <h1 @click="handleClick">This is an about page</h1>
    <h2>{{myName}}</h2>
  </div>
</template>


<script>

export default {
  name: 'HomeView',
  // 在state中定义全局数据，在组件中通过computed计算属性来获得
  computed:{
    myName(){
      return this.$store.state.name
    }
  },
  methods: {
    handleClick() {
      // 同步修改数据
      // 可以直接在组件中发送修改数据的请求
      // this.$store.commit('change','hello world');




      // 异步修改数据
      // 1.在要修改数据的组件里面，写一个方法，派发一个名叫xxx的action
      // 2.store感知到这个action,在actions里面调用xxx方法，commit 提交一个名叫xxx的修改数据的请求
      // 3.mutations感知到这个请求,执行相应xxx方法来修改数据
      this.$store.dispatch('change','hello world');
    }
  }
}
</script>