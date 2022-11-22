## vuex模块化+命名空间

1.目的：当代码更好维护，让多种数据分类更加明确

2.修改store.js
    const CountAbout = {
        namespaced:true, // 开启命名空间
        state:{
            sum:0
        },
        actions:{},
        mutations:{},
        getters:{
            name(state){}  // 使用相当于计算属性
        }
    }

    export default = new Vuex.Store({
        modules:{
            CountAbout或
            a:CountAbout
        }
    })

3.开启命名空间后，组件中读取state数据：
    // 方式一：自己直接读取
    this.$store.state.CountAbout.sum
    // 方式二：借助mapState读取：
    ...mapState('CountAbout',{a:'xxx',b:'yyy'})  // 对象形式
    ...mapState('CountAbout',['xxx','yyy'])  // 数组形式

4.开启命名空间后，组件中读取getters数据：
    // 方式一：自己直接读取
    this.$store.getters['CountAbout/name']
    // 方式二：借助mapGetters读取
    ...mapGetters({a:'xxx',b:'yyy'})  // 对象形式
    ...mapGetters('CountAbout',['xxx','yyy'])  // 数组形式

5.开启命名空间后，组件中调用dispatch：
    // 方式一：自己直接读取
    this.$store.dispatch('CountAbout/xxx',数据)
    // 方式二：借助mapActions读取,传递的数据通过事件回调传递
    ...mapActions('CountAbout',{add:'jia',increace:'jian'})  // 对象形式
    ...mapActions('CountAbout',['jia'])  // 数组形式

6.开启命名空间后，组件中调用commit：
    // 方式一：自己直接读取
    this.$store.cmomit('CountAbout/xxx',数据)
    // 方式二：借助mapMutations读取,传递的数据通过事件回调传递
    ...mapMutations('CountAbout',{add:'jia',increace:'jian'})  // 对象形式
    ...mapMutations('CountAbout',['jia'])  // 数组形式

7.mapState,mapGetters可用来批量生成计算属性，mapActions,mapMutations可用来生成方法，方法中调用dispatch,commit

## 路由笔记
https://blog.csdn.net/xianyu120/article/details/120850859