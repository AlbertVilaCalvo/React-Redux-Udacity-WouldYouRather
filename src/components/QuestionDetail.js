import { useParams } from 'react-router-dom'
import Loading from './Loading'
import useQuestionAuthor from '../questions/useQuestionAuthor'
import useLoggedUser from '../loggeduser/useLoggedUser'
import QuestionDetailAnswered from './QuestionDetailAnswered'
import QuestionDetailUnanswered from './QuestionDetailUnanswered'

const QuestionDetail = () => {
  const { questionId } = useParams()

  const user = useLoggedUser()
  const [question, author] = useQuestionAuthor(questionId)

  if (user === null || question === null || author === null) {
    return <Loading />
  }

  const isAnswered = Object.keys(user.answers).includes(questionId)

  if (isAnswered) {
    return <QuestionDetailAnswered />
  } else {
    return <QuestionDetailUnanswered question={question} author={author} />
  }
}

export default QuestionDetail
