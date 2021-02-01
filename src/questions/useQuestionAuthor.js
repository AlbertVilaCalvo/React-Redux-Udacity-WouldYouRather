import { useSelector } from 'react-redux'

/**
 * @param {string} id - the question id
 * @returns {[Object, Object]|[null, null]} - an array with the question and the
 * author, or [null, null] if either is not available
 */
export default function useQuestionAuthor(id) {
  const questions = useSelector((state) => state.questions)
  const users = useSelector((state) => state.users)
  if (questions === null || users === null) {
    return [null, null]
  }
  const question = questions[id]
  if (!question) {
    return [null, null]
  }
  const author = users[question.author]
  if (!author) {
    return [null, null]
  }
  return [question, author]
}
