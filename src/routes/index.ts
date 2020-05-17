import { lazy } from 'react'
import { MRoute } from './RenderRouter'

export const normalRoutes: MRoute[] = [
  {
    path: '/login',
    component: lazy(() => import('@/pages/login'))
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

export const authorizedRoutes: MRoute[] = [
  {
    layout: 'AuthorityLayout',
    path: '/home',
    component: lazy(() => import('@/pages/home'))
  }
]

export const routes = [...authorizedRoutes, ...normalRoutes]
