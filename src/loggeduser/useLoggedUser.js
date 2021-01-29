import { useSelector } from 'react-redux'

export default function useLoggedUser() {
  const loggedUser = useSelector((state) => state.loggedUser)
  const users = useSelector((state) => state.users)
  if (loggedUser !== null && users !== null) {
    return users[loggedUser]
  }
  return null
}
