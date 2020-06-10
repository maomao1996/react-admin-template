import { lazy } from 'react'
import { MRoute } from './RenderRouter'

// 登录
export const loginRoutes: MRoute[] = [
  {
    path: '/login',
    component: lazy(() => import('@/pages/login'))
  }
]

// 默认路由
export const normalRoutes: MRoute[] = [
  ...loginRoutes,
  {
    path: '*',
    redirect: '/login'
  }
]

// 权限路由
export const authorizedRoutes: MRoute[] = [
  {
    layout: 'AuthorityLayout',
    path: '/home',
    component: lazy(() => import('@/pages/home'))
  }
]

export const routes = [
  ...authorizedRoutes,
  ...loginRoutes,
  {
    path: '/404',
    component: lazy(() => import('@/pages/404'))
  },
  {
    path: '/',
    exact: true,
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/404'
  }
]
