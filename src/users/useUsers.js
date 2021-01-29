import { useSelector } from 'react-redux'

/**
 * Returns an array with the users, or null if they haven't been fetched yet.
 * @returns {unknown[]|null}
 */
export function useUsers() {
  // Convert { username1: {user1}, username2: {user2} } to [{user1}, {user2}]
  const users = useSelector((state) => state.users)
  return users ? Object.values(users) : null
}
