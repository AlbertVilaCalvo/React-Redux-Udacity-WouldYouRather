const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

export const logIn = (username) => {
  return {
    type: LOG_IN,
    username,
  }
}

export const logOut = () => {
  return {
    type: LOG_OUT,
  }
}

export const loggedUserReducer = (state = null, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.username
    case LOG_OUT:
      return null
    default:
      return state
  }
}
