<template>
<ul>
    <transition-group name="hello" appear>
        <ItemView 
        v-for="item in TodoList" 
        :key="item.id" 
        :item="item"  />
    </transition-group>
  
</ul>
  
</template>

<script>
import ItemView from './ItemVue.vue'
export default {
    name: 'ListView',
    components:{
        ItemView 
    },
    props: ['TodoList']
}

</script>

<style lang='scss' scoped>
ul {
    margin-top: 20px;
    margin-bottom: 30px;
}

// 动画
// .hello-enter-active{
//     animation: move .5s linear;
// }

// .hello-leave-active {
//     animation: move .5s linear reverse;
// }
// @keyframes move {
//     from{
//         transform: translateX(100%);
//     }
//     to {
//         transform: translateX(0);
//     }
// }


// 过渡
.hello-enter,.hello-leave-to {
    transform: translateX(100%);
}
.hello-enter-active,.hello-leave-active {
    transition: .5s linear;
}
.hello-enter-to,.hello-leave {
    transform: translateX(0);
}
</style>
