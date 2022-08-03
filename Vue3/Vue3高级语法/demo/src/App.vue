<template>
  <div>
    <input v-model="inputValue" type="text">
    <button @click="handleAddItem">提交</button>
    <ul>
      <List-item v-for="(item,index) in list" :key="index" :msg="item" :index="index" :list="list"/>
    </ul>
  </div>
</template>

<script>
import ListItem from './components/ListItem.vue';
import {reactive,ref} from 'vue';
export default {
  name: 'App',
  components: {
    ListItem
  },
  setup(){
    const inputValue = ref(123);
    const list = reactive([]);
    const handleAddItem = function(){
      list.push(inputValue.value);
      inputValue.value = '';
    };
    return { inputValue, list, handleAddItem }
  }
}
</script>

<style>

</style>
