import './App.css'
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, logOut } from './loggeduser/loggedUser'
import LoginForm from './components/LoginForm'

function App() {
  const dispatch = useDispatch()
  const loggedUser = useSelector((state) => state.loggedUser)
  console.log('loggedUser', loggedUser)

  return (
    <Router>
      <div className="App-outer-container">
        <div className="App-inner-container">
          <header className="header">
            <Link className="header-link" to="/">
              Would You Rather?
            </Link>
            {loggedUser !== null && (
              <span className="header-hello-username">Hello {loggedUser}!</span>
            )}
            {loggedUser === null ? (
              <button
                className="button button-primary"
                onClick={() => {
                  dispatch(logIn('tylermcginnis'))
                }}
              >
                Log In
              </button>
            ) : (
              <button
                className="button button-primary"
                onClick={() => {
                  dispatch(logOut())
                }}
              >
                Log Out
              </button>
            )}
          </header>
          <nav className="App-nav">
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add"
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  New Question
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/leaderboard"
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  Leader Board
                </NavLink>
              </li>
            </ul>
          </nav>
          <main>
            <Switch>
              {loggedUser === null && (
                <Route path="/login">
                  <LoginForm />
                </Route>
              )}
              {loggedUser === null && <Redirect to="/login" />}
              <Route path="/add">
                <p>Add</p>
              </Route>
              <Route path="/leaderboard">
                <p>Leader Board</p>
              </Route>
              <Route path="/" exact>
                <p>Home</p>
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
