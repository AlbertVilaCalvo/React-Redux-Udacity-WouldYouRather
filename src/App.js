import './App.css'
import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import useLoggedUser from './loggeduser/useLoggedUser'
import { getUsers } from './users/users'
import { getQuestions } from './questions/questions'
import { logIn, logOut } from './loggeduser/loggedUser'
import LoginForm from './components/LoginForm'
import Avatar from './components/Avatar'
import HomePage from './components/HomePage'
import QuestionDetail from './components/QuestionDetail'
import NewQuestionForm from './components/NewQuestionForm'
import LeaderBoard from './components/LeaderBoard'

function App() {
  const dispatch = useDispatch()
  const loggedUser = useLoggedUser()

  // From Redux docs - https://react-redux.js.org/api/hooks#usedispatch
  // "dispatch function identity is stable and won't change on re-renders"
  // so this will run only once
  useEffect(() => {
    dispatch(getUsers())
    dispatch(getQuestions())
  }, [dispatch])

  return (
    <Router>
      <div className="App-outer-container">
        <div className="App-inner-container">
          <header className="header">
            <Link className="header-link" to="/">
              Would You Rather?
            </Link>
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
              <div className="header-right-container">
                <span className="header-hello-username">
                  Hello {loggedUser.name}!
                </span>
                <Avatar
                  user={loggedUser}
                  size="small"
                  className="header-avatar"
                />
                <button
                  className="button button-primary"
                  onClick={() => {
                    dispatch(logOut())
                  }}
                >
                  Log Out
                </button>
              </div>
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
                <Route path="/login" component={LoginForm} />
              )}
              {loggedUser === null && <Redirect to="/login" />}
              <Route path="/add" component={NewQuestionForm} />
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/question/:questionId" component={QuestionDetail} />
              <Route path="/" exact component={HomePage} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
