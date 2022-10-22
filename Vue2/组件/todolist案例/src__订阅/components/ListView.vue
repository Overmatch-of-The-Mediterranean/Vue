<template>
<ul>
  <ItemView 
  v-for="item in TodoList" 
  :key="item.id" 
  :item="item" 
  :changeCheck="changeCheck"/>
</ul>
  
</template>

<script>
import ItemView from './ItemVue.vue'
export default {
    name: 'ListView',
    components:{
        ItemView 
    },
    props: ['TodoList', 'changeCheck']
}

</script>

<style lang='scss' scoped>
ul {
    margin-top: 20px;
    margin-bottom: 30px;
}
</style>
