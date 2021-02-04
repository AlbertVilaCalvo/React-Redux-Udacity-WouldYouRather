import { Redirect, Route } from 'react-router-dom'
import useLoggedUser from '../loggeduser/useLoggedUser'

// Adapted from https://reactrouter.com/web/example/auth-workflow

function PrivateRoute({ children, component: Component, ...rest }) {
  const loggedUser = useLoggedUser()
  const isLogged = loggedUser !== null

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children || <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
