import { useSelector } from 'react-redux'

// TODO remove if not used

/**
 * @returns {Object[]|null} an array with all questions, or null if they
 * haven't been fetched yet.
 */
export default function useQuestions() {
  const questions = useSelector((state) => state.questions)
  return questions !== null ? Object.values(questions) : null
}
