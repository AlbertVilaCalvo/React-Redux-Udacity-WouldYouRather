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
              Would you rather?
            </Link>
            {loggedUser !== null && (
              <span className="header-hello-username">Hello {loggedUser}!</span>
            )}
            {loggedUser === null ? (
              <button
                className="header-button"
                onClick={() => {
                  dispatch(logIn('tylermcginnis'))
                }}
              >
                Log In
              </button>
            ) : (
              <button
                className="header-button"
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
                <NavLink to="/" exact activeClassName="nav-link-active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/add" activeClassName="nav-link-active">
                  New Question
                </NavLink>
              </li>
              <li>
                <NavLink to="/leaderboard" activeClassName="nav-link-active">
                  Leader Board
                </NavLink>
              </li>
            </ul>
          </nav>
          <main>
            <Switch>
              {loggedUser === null && (
                <Route path="/login">
                  <p>Log In</p>
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
