import VueRouter from 'vue-router'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

import routes from './routes'

export default () => {
    return new VueRouter({
        routes,
        mode: 'history',
        base: __dirname,
        linkActiveClass: 'active-link',
        linkExactActiveClass: 'exact-active-link',
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return {
                    x: 0,
                    y: 0
                }
            }
        },
        fallback: true,
        // parseQuery(query) {
        //     console.log(query);
        // },
        // stringifyQuery(obj) {
        //     console.log(obj);
        // }
    })
}