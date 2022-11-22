import VueRouter from 'vue-router'
import AboutView from '../pages/AboutView'
import HomeView from '../pages/HomeView'
import MessageView from '../pages/MessageView.vue';
import NewsView from '../pages/NewsView.vue';
import DetailsView from '../pages/DetailsView.vue'
const router = new VueRouter({
    routes: [
        {
            path: '/',
            meta: {
                isAuth: true
            }
        }
        ,
        {
            path: '/about',
            component: AboutView,
            meta: {
                name: '关于',
                isAuth: true
            }
        },
        {
            path: '/home',
            component: HomeView,
            children: [
                {
                    path: 'news',
                    component: NewsView,
                    children: [
                        {
                            path: 'details',
                            component: DetailsView
                        },

                    ],
                    meta: {
                        isAuth: true,
                        name: '新闻'
                    }
                },
                {
                    path: 'message',
                    component: MessageView,
                    meta: {
                        isAuth: true,
                        name: '消息'
                    },
                    // beforeEnter(to, from, next) {
                    //     if (to.meta.isAuth) {
                    //         if (localStorage.getItem('school') === 'hpu') {
                    //             next()
                    //         } else {
                    //             alert('没有访问权限')
                    //         }
                    //     } else {
                    //         alert('没有访问权限')
                    //     }
                    // }
                }
            ],
            meta: {
                name: '主页',
                isAuth: true
            }
        }


    ]
})

// 前置路由守卫
// router.beforeEach((to, from, next) => {
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'hpu') {
//             next()
//         }
//     } else {
//         alert('没有访问权限')
//     }
// })

router.afterEach((to, from) => {
    document.title = to.meta.name || '尚硅谷'
})

export default router