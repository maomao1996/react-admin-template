import React from 'react'
import { Switch, Route, RouteProps, Redirect } from 'react-router-dom'
import NormalLayout from '@/layout/NormalLayout'
import AuthorityLayout from '@/layout/AuthorityLayout'

type Layout = {
  NormalLayout: React.FC
  AuthorityLayout: React.FC
}

const LAYOUT_MAP:Layout = {
  NormalLayout: NormalLayout,
  AuthorityLayout: AuthorityLayout
}

export type MRoute = {
  component?: any
  redirect?: string
  layout?: 'NormalLayout' | 'AuthorityLayout'
  [key: string]: any
} & RouteProps

const renderRedirectRoute = (route: MRoute) => {
  return (
    <Route
      {...route}
      key={route.path as string}
      render={() => <Redirect to={route.redirect as string} />}
    />
  )
}

const renderRoute = (route: MRoute) => {
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
      render={(props) => (
        <Layout {...props}>
          <Component {...props}></Component>
        </Layout>
      )}
    ></Route>
  )
}

interface RenderRouterProps {
  routes: MRoute[]
}

export default function RenderRouter({
  routes
}: RenderRouterProps) {
  return (
    <Switch>
      {routes.map((route) => renderRoute(route))}
    </Switch>
  )
}
