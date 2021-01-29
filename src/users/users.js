import { _getUsers } from '../utils/_DATA'

const SET_USERS = 'SET_USERS'

const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  }
}

export const getUsers = () => {
  return (dispatch) => {
    _getUsers().then((users) => dispatch(setUsers(users)))
  }
}

export const usersReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users
    default:
      return state
  }
}
