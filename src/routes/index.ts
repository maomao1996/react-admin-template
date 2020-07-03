import { lazy } from 'react'
import { RouteItem } from './RenderRouter'

// 登录
export const loginRoutes: RouteItem[] = [
  {
    path: '/login',
    component: lazy(() => import('@/pages/login'))
  }
]

// 默认路由
export const normalRoutes: RouteItem[] = [
  ...loginRoutes,
  {
    path: '*',
    redirect: '/login'
  }
]

// 权限路由
export const authorizedRoutes: RouteItem[] = [
  {
    layout: 'AuthorityLayout',
    path: '/home',
    component: lazy(() => import('@/pages/home'))
  }
]

export const routes: RouteItem[] = [
  ...authorizedRoutes,
  ...loginRoutes,
  {
    layout: 'AuthorityLayout',
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
