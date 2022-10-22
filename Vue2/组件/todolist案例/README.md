# 总结

## props适用于
> (1).父组件 ===> 子组件 通信    

>  (2).子组件 ===> 父组件 通信(先给子组件传递一个函数)


## v-model 与 props的注意事项
> (1).使用v-model时要切记，不要绑定props传过来的值，因为props是只读的。  

> (2).props传过来的若是对象类型的值，修改对象中的属性时，Vue不会报错，但不建议（以免以后更新后报错）

## 其他
> (1).使用的新包，nanoid生成独一无二的字符串，可用作id。另外其是uuid的精简版。npm i nanoid下载  

> (2).想在组件上添加添加事件监听,可以使用.native修饰符,否则在组件上添加事件绑定，会把其转换成普通标签  

> (3).Array.reduce函数


## WebStorage
    1.存储内容大小一般5mb左右（不同浏览器可能还不一样）
    2.浏览器通过Window.localStorage和Window.sessionStorage来实现本地存储
    3.相关API
        1xxxStorage.setItem('key','value')，如果键名存在，则更新其对应的值
        2xxxStorage.getItem('key')
        3xxxStorage.removeItem('key')
        4xxxStorage.clear()，清除存储中的所有数据
    
    4.备注：
        1.sessionStorage存储的内容随浏览器的关闭消失
        2.localStorage存储的内容只能手动清除
        3.xxxStorage.getItem('key')，如果key不存在，返回null
        4.JSON.parse(null)的结果依然是null


## 组件自定义事件
    1.一种组件间的通信方式，适用于 子==>父
    2.使用场景，A是父组件，B是子组件，B传数据给A，就要在A中给B绑定自定义事件，且事件回调在中
    3.绑定自定义事件：
        第一种方式
            ```
                <Head @xxx="回调函数"/>或<Head v-on:xxx="回调函数"/>

            ```
        第二种方式
            ```
                <Head ref="student"/>
                mounted(){
                    this.refs.student.$on('事件名'，事件回到函数)
                }
            ```
    4，触发自定义事件
                this.$emit('事件名',要传入的数据)
    5.解绑自定义事件
                this.$off('事件名')，this.$off()表示解绑所有自定义事件
    6，组件也可以绑定原生DOM事件，需要使用.native修饰符
    7.注意：通过 this.refs.student.$on()绑定自定义事件时，回调要么配置在methods中，要么在this.refs.student.$on()中使用箭头函数


## 全局事件总线
    1.一种组件间娥通信方式
    2.安装全局事件总线
        ```
            new Vue({
                ......
                beforeCreate(){
                    Vue.prototype.$bus = this
                }
                ......
            })
        ```
    3.使用全局事件
        1.接收数据，A想接收数据，需要给$bus绑定自定义事件，事件的回调留在A中
            ```
                mounted(){
                    this.$bus.$on('事件名'，回调函数)
                }
            ```
        2.传递数据，B向A传递数据，需要触发$bus上的自定义事件
            ```
                this.$emit('事件名'，数据)
            ```
    4.最好在beforeDestroy钩子中，用$off解绑当前组件在$bus上定义的自定义事件


    ## 消息订阅与发布
    适用于任何组件间通信
    1.安装pubsub-js库
    2.哪里使用在哪里引用进去，import pubsub from 'pubsub-js',相当于在全局中多了个pubsub
    3.订阅(接收)消息：
        ```
            methods:{
                demo(msg,data){}
            },
            mounted(){
                const subId = pubsub.subscribe('消息名字'，this.demo)

                // 注意，直接写函数，要用箭头函数
                const subId = pubsub.subscribe('消息名字'，()=>{})
            }
        ```
    4.发布(传递)消息
        ```
            pubsub.publish('消息名字'，数据)
        ```
    5.最好在beforeDestroy钩子中，用pubsub.unsubscribe(subId)取消订阅
    备注：全局事件总线比订阅使用的多

