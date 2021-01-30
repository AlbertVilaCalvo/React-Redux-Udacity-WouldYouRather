import { useSelector } from 'react-redux'

/**
 * @returns {Object[]|null} an array with all questions, sorted by most recent
 * first, or null if they haven't been fetched yet.
 */
export default function useQuestionsSorted() {
  const questions = useSelector((state) => state.questions)
  if (questions === null) return null
  const questionsArray = Object.values(questions)
  return questionsArray.sort((a, b) => b.timestamp - a.timestamp)
}
