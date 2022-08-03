<template>
    <li @click="handleDeleteItem(index,list)">{{ msg }}</li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    msg: String,
    index:Number,
    list:Array
  },
  setup(){
    const handleDeleteItem = (index,list)=>{
      console.log(index,list);
      list.splice(index,1);
    }
    return { handleDeleteItem };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
