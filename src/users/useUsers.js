import { useSelector } from 'react-redux'

/**
 * @returns {Object[]|null} an array with all users, or null if they haven't
 * been fetched yet.
 */
export function useUsers() {
  // Convert { username1: {user1}, username2: {user2} } to [{user1}, {user2}]
  const users = useSelector((state) => state.users)
  return users ? Object.values(users) : null
}
