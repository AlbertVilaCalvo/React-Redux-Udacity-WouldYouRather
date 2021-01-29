import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../users/users'
import { logIn } from '../loggeduser/loggedUser'

const NO_USER_SELECTED = 'not-selected'

const LoginForm = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  if (users === null) {
    dispatch(getUsers())
  }

  const [selectedUser, setSelectedUser] = useState(NO_USER_SELECTED)

  const onChange = (event) => {
    setSelectedUser(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(logIn(selectedUser))
  }

  const usersArray = users ? Object.values(users) : null

  return (
    <div>
      <h1>Welcome to Would You Rather?</h1>
      <p>Please log in to continue</p>
      {users === null ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={onSubmit}>
          <select value={selectedUser} onChange={onChange}>
            <option key={NO_USER_SELECTED} value={NO_USER_SELECTED}>
              Select a user
            </option>
            {usersArray.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <input
            type="submit"
            value="Log In"
            disabled={selectedUser === NO_USER_SELECTED}
          />
        </form>
      )}
    </div>
  )
}

export default LoginForm
