import { useSelector } from 'react-redux'

/**
 * @returns {Object|null} the logged user if available, or null
 */
export default function useLoggedUser() {
  const loggedUser = useSelector((state) => state.loggedUser)
  const users = useSelector((state) => state.users)
  if (loggedUser !== null && users !== null) {
    return users[loggedUser]
  }
  return null
}
