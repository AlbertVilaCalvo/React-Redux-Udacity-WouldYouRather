import './LoginForm.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../loggeduser/loggedUser'
import { useUsers } from '../users/useUsers'
import Loading from './Loading'

const NO_USER_SELECTED = 'not-selected'

const LoginForm = () => {
  const dispatch = useDispatch()
  const users = useUsers()

  const [selectedUser, setSelectedUser] = useState(NO_USER_SELECTED)

  const onChange = (event) => {
    setSelectedUser(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(logIn(selectedUser))
  }

  return (
    <div>
      <h1>Welcome to Would You Rather?</h1>
      <p className="login-form-subtitle">Please log in to continue</p>
      {users === null ? (
        <Loading />
      ) : (
        <form onSubmit={onSubmit} className="login-form">
          <select value={selectedUser} onChange={onChange}>
            <option key={NO_USER_SELECTED} value={NO_USER_SELECTED}>
              Select a user
            </option>
            {/* TODO use Avatar here to show image on the dropdown */}
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <input
            type="submit"
            value="Log In"
            disabled={selectedUser === NO_USER_SELECTED}
            className="button button-white"
          />
        </form>
      )}
    </div>
  )
}

export default LoginForm
