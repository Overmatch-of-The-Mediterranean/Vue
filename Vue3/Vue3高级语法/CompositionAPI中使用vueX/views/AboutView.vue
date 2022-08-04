<template>
  <div class="about">
    <h1 @click="handleClick">This is an about page</h1>
    <h2>{{name}}</h2>
  </div>
</template>


<script>
// https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register
import { useStore } from 'vuex';
import { toRefs } from 'vue';
export default {
  name: 'HomeView',
  setup(){
    const store = useStore();

    // 变成响应式数据 
    const {name} = toRefs(store.state);
    const handleClick = ()=>{
      // 同步直接修改
      // store.commit('changeName','hello world');
      store.dispatch('getData');
    };
    return { name, handleClick}
  }

}
</script>