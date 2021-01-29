import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { loggedUserReducer } from './loggeduser/loggedUser'
import { Provider } from 'react-redux'
import { usersReducer } from './users/users'

const rootReducer = combineReducers({
  loggedUser: loggedUserReducer,
  users: usersReducer,
})

const middleware = applyMiddleware(thunk, logger)

const store = createStore(rootReducer, middleware)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
