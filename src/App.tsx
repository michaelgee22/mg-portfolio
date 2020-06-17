import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import routes from './routes'

const App: React.FC = () => {
  return (
    <Router>
      {routes.map(route => {
        const { id, path, component, exact } = route
        return <Route exact={exact || false} path={path} component={component} key={id} />
      })}
    </Router>
  )
}

export default App
