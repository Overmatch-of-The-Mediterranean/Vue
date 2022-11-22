<template>
  <div class="contain">
        <div>
            消息编号：{{ $route.query.id }}
            消息标题：{{$route.query.title}}
        </div>
  </div>
</template>

<script>
export default {
    name:'DetailView',
    mounted(){
        // console.log(this.$route);
    }
}

</script>

<style lang='scss' scoped>
.contain{
    margin: 50px 0 0 20px;
}
</style>
