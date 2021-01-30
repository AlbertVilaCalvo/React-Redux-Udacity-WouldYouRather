import { useSelector } from 'react-redux'

/**
 * Returns an array with all questions, or null if they haven't been fetched yet.
 * @returns {unknown[]|null}
 */
export default function useQuestions() {
  const questions = useSelector((state) => state.questions)
  return questions !== null ? Object.values(questions) : null
}
