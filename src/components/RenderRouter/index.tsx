import React, { Suspense, SuspenseProps } from 'react'
import { Switch, Route, RouteProps, Redirect } from 'react-router-dom'

// 路由渲染组件

export interface RouteItem extends Omit<RouteProps, 'render'> {
  redirect?: string
  icon?: React.ReactNode
  routes?: RouteItem[]
}

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
  const { component: Component, ...rest } = route
  return (
    <Route
      {...rest}
      key={route.path as string}
      render={(props) =>
        Component && (
          <Component {...props}>
            <RenderRouter routes={route.routes!}></RenderRouter>
          </Component>
        )
      }
    />
  )
}

interface RenderRouterProps {
  routes: RouteItem[]
  fallback?: SuspenseProps['fallback']
}

const RenderRouter: React.FC<RenderRouterProps> = ({ routes, fallback = null }) => {
  if (!routes.length) {
    return null
  }
  return (
    <Suspense fallback={fallback}>
      <Switch>{routes.map((route) => renderRoute(route))}</Switch>
    </Suspense>
  )
}

export default RenderRouter
