<template>
    <div>
        <h1>当前求和的值为：{{sum}}</h1>
        <h1>当前求和10倍值为：{{bigSum}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button class="add" @click="add(n)">+</button>
        <button class="minus" @click="minus(n)">-</button>
        <button @click="oddAdd(n)">当前求和值为奇数再加</button>
        <button @click="waitAdd(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
    name:'CountView',
    data(){
        return {
            n:1
        }
    },
    methods:{
        // add(){
        //     this.$store.dispatch('jia',this.n);
        // },
        // minus() {
        //     this.$store.dispatch('minus', this.n);
        // },
        // waitAdd() {
        //     this.$store.dispatch('waitAdd', this.n)
        // },

        // mapActions 对象写法
        ...mapActions('CountAbout',{add:'jia',minus:'minus',waitAdd:'waitAdd'}),
        
        // mapActions 数组写法
        // ...mapActions(['jia','minus','waitAdd']),

        // mapMutations 对象写法
        ...mapMutations('CountAbout', { oddAdd:'ODDADD'}),

        // mapMutations 数组写法
        ...mapMutations('CountAbout', ['ODDADD']),
        // oddAdd() {
        //     this.$store.commit('ODDADD', this.n)
        // }
        
    },
    computed:{
        ...mapState('CountAbout',['sum']),
        ...mapGetters('CountAbout',['bigSum'])
    }
}

</script>

<style lang='scss' scoped>
.add {
    width: 50px;
}
.minus {
    width: 50px;
}
button {
    margin: 100px 20px;
}
</style>
