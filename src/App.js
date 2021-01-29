import './App.css'
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App-outer-container">
        <div className="App-inner-container">
          <header className="header">
            <Link className="header-link" to="/">
              Would you rather?
            </Link>
          </header>
          <nav>
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
              <Route path="/add">
                <p>Add</p>
              </Route>
              <Route path="/leaderboard">
                <p>Leader Board</p>
              </Route>
              <Route path="/">
                <p>Home</p>
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
