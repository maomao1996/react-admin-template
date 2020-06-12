import React from 'react'
import { Switch, Route, RouteProps, Redirect } from 'react-router-dom'
import NormalLayout from '@/layout/NormalLayout'
import AuthorityLayout from '@/layout/AuthorityLayout'

type Layout = {
  NormalLayout: React.ComponentType
  AuthorityLayout: React.ComponentType
}

const LAYOUT_MAP: Layout = {
  NormalLayout: NormalLayout,
  AuthorityLayout: AuthorityLayout
}

export type RouteItem = {
  redirect?: string
  layout?: 'NormalLayout' | 'AuthorityLayout'
  icon?: React.ReactNode
} & Omit<RouteProps, 'render'>

const renderRedirectRoute = (route: RouteItem) => {
  return (
    <Route
      {...route}
      key={route.path as string}
      render={() => <Redirect to={route.redirect as string} />}
    />
  )
}

const renderRoute = (route: RouteItem) => {
  if (route.redirect) {
    return renderRedirectRoute(route)
  }
  const { component: Component, layout = 'NormalLayout', ...rest } = route
  const Layout = LAYOUT_MAP[layout]
  return (
    <Route
      {...rest}
      key={route.path as string}
      exact
      render={(props) => <Layout {...props}>{Component && <Component {...props} />}</Layout>}
    ></Route>
  )
}

interface RenderRouterProps {
  routes: RouteItem[]
}

const RenderRouter: React.FC<RenderRouterProps> = ({ routes }) => {
  return <Switch>{routes.map((route) => renderRoute(route))}</Switch>
}

export default RenderRouter
