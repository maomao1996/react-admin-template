import { lazy } from 'react'

import { RouteItem } from '@/components/RenderRouter'

// 默认路由
export const normalRoutes: RouteItem[] = [
  {
    path: '/',
    component: lazy(() => import('@/layout/NormalLayout')),
    routes: [
      {
        path: '/',
        exact: true,
        redirect: '/login'
      },
      {
        path: '/login',
        component: lazy(() => import('@/pages/login'))
      },
      {
        path: '*',
        redirect: '/login'
      }
    ]
  }
]

// 权限路由
export const authorizedRoutes: RouteItem[] = [
  {
    path: '/',
    component: lazy(() => import('@/layout/AuthorityLayout')),
    routes: [
      {
        path: '/',
        exact: true,
        redirect: '/home'
      },
      {
        path: '/home',
        component: lazy(() => import('@/pages/home'))
      },
      {
        path: '/404',
        component: lazy(() => import('@/pages/404'))
      },
      {
        path: '*',
        redirect: '/404'
      }
    ]
  }
]
