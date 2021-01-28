import './App.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Link className="header-link" to="/">
            Would you rather?
          </Link>
        </header>
        <nav></nav>
        <main></main>
      </div>
    </Router>
  )
}

export default App
