/*  关于不同版本的Vue(render)
    
    1. vue.js与vue.runtime.xxx.js的区别：
            (1).vue.js是完整的vue，包含：核心功能+模板解析器
            (2)vue.runtime.xxx.js是运行版的vue，只包含：核心功能，没有模板解析器

    2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
      render函数接收到的createElement函数去指定具体的内容

*/

/*  vue.config.js配置文件
p64
    1.使用vue inspect > output.js可以查看脚手架的默认配置
    2.vue.config.js可以对脚手架进行个性化定制。详情见：https://cli.vuejs.org/zh
    3.vue不会把vue配置文件给你看，你可以自己另开一个文件，将写的配置部分覆盖原来的配置
*/

/*  ref属性
p65
    1.被用来给元素或子组件注册引用信息(id的替代者)
    2.应用在HTML标签上获取的是真实的DOM元素，应用在组件上获取的是组件实例对象
    3.使用方式：
        打标识：<h1 ref="xxx">...</h1> 或 <School ref="xxx"></School>
        获取：this.$refs.xxx
    备注：id应用在组件上，获取的是组件的整个DOM结构
*/

/*  组件的配置项props
p66
    功能：接收外部传过来的数据
        (1).传递数据：
                <School name="111" :age="18">
        (2).接收数据：
              第一种方式
                props:['name','age']
              第二种方式：
                props:{
                    name:String,
                    age:Number
                }
              第三种方式：(总共三个配置项)
                props:{
                    name:{
                        type:String,
                        required:true  是否是必需的
                    },
                    age:{
                        type:Number,
                        default:88      默认值
                    }
                }
        备注：props是只读的，vue底层会监视props，一旦发生修改数据就会报错，
             如果遇到使用props时需要修改数据的需求，可以将传入的数据赋值给data中的数据
*/

/*  mixin混入
p67
    功能: 将组件共用的配置提取成一个混入对象,单独放到一个js文件中
    使用方式：
            第一步定义混合：
              export const hunru = {
                    data(){...},
                    methods:{...}
                }
            第二步使用混入：
                (1).全局混入: Vue.mixin(hunru)
                (2).局部混入: mixins:[hunru,...]
    备注：
            1.当混入和data发生冲突时，混入的优先级更高
            2.当生命周期函数发生冲突时，两者全要
*/

/*  插件(也放到单独的js文件中)
p68
    功能：用于增强vue
    本质：包含install方法的一个对象，install的第一个参数是Vue构造函数，第二个以后的是插件使用者传递的数据
    定义插件：
            export const plugin = {
                install(Vue,x,y,z){
                    Vue.filter  // 添加全局过滤器
                    Vue.mixin   // 添加全局混入
                    Vue.directive   // 添加全局自定义指令
                    Vue.prototype.$myMethod = function() {...}  //添加实例方法
                    
                }
            }
    使用插件：Vue.use(plugin,1,2,3)
*/