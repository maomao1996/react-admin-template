import { MRoute } from './RenderRouter'

export const normalRoutes: MRoute[] = []

export const authorizedRoutes: MRoute[] = []

export const routes = [...authorizedRoutes, ...normalRoutes]
