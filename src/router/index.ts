import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import IndexView from '@/views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/LoginView.vue"),
    },
    {
      path: '/', // 表示当浏览器地址请求的是'/'时显示的文件
      name: 'home',
      component: AppLayout, // 主体布局文件
      children: [
        {
          path: "", // '/'与''拼接后还是'/'，说明浏览器地址请求时'/'时，网页的路由显示区显示IndexView
          component: IndexView, // 这种方式是默认导入，当一进到这个网页就立即导入
        },
        {
          path: '/about', // 浏览器地址请求时'/about'时，网页的路由显示区显示AboutView
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue') // 这种方式是懒加载，只有访问'/about'是才会被导入
        },
        {
          path: '/:xxx(.*)*', // 如果路由匹配失败，则显示错误页面
          name: 'ErrorPage',
          component: () => import('@/views/ErrorPage.vue')
        }
      ]
    },
  ]
})

export default router
