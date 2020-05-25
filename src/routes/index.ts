import { lazy } from 'react'
import { MRoute } from './RenderRouter'

export const loginRoutes: MRoute[] = [
  {
    path: '/login',
    component: lazy(() => import('@/pages/login'))
  }
]

export const normalRoutes: MRoute[] = [
  ...loginRoutes,
  {
    path: '*',
    redirect: '/login'
  }
]

export const authorizedRoutes: MRoute[] = [
  {
    layout: 'AuthorityLayout',
    path: '/home',
    component: lazy(() => import('@/pages/home'))
  },
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

export const routes = [...authorizedRoutes, ...normalRoutes]
