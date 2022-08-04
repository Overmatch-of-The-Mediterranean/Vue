<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 @click="handleClick">{{name}}</h1>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { toRefs } from 'vue';
export default {
  name: 'HomeView',
  setup() {
    const store = useStore();
    const { name } = toRefs(store.state);
    // const name  = store.state.name;
    const handleClick = () => {
      // 同步直接修改
      // store.commit('changeName','hello world');
      store.dispatch('getData');
    };
    return { name, handleClick }
  }
}
</script>
