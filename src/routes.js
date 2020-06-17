import React, { lazy } from 'react'
import Loadable from 'components/Loadable'

import { MG_ROUTE_PATHS } from 'constants/navigation'

const routes = _configureRoutes()

export default [
  { id: 'homepage', path: MG_ROUTE_PATHS.homepage, component: routes.Homepage, exact: true },
  {
    id: 'react-sandbox',
    path: [MG_ROUTE_PATHS.reactSandbox, MG_ROUTE_PATHS.reactSandboxPage],
    component: routes.ReactSandbox,
    exact: true
  }
]

function _configureRoutes() {
  const Homepage = () => (
    <Loadable
      render={componentProps => {
        const Component = lazy(() => import('./features/Homepage'))
        return <Component {...componentProps} />
      }}
      fallback={() => (
        <div
          id="mg-homepage-loading"
          style={{ width: '100%', height: '100vh', backgroundColor: '#3749A2' }}
        />
      )}
    />
  )

  const ReactSandbox = () => (
    <Loadable
      render={componentProps => {
        const Component = lazy(() => import('./features/ReactSandbox'))
        return <Component {...componentProps} />
      }}
      fallback={() => (
        <div
          id="mg-reactSandbox-loading"
          style={{ width: '100%', height: '100vh', backgroundColor: '#FFF' }}
        />
      )}
    />
  )

  return {
    Homepage,
    ReactSandbox
  }
}
