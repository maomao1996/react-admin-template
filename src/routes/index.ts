import { lazy } from 'react'
import { MRoute } from './RenderRouter'

export const normalRoutes: MRoute[] = [
  {
    path: '/login',
    component: lazy(() => import('@/pages/login'))
  }
]

export const authorizedRoutes: MRoute[] = []

export const routes = [...authorizedRoutes, ...normalRoutes]
