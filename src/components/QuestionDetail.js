import { useParams } from 'react-router-dom'
import useQuestionAuthor from '../questions/useQuestionAuthor'
import useLoggedUser from '../loggeduser/useLoggedUser'
import QuestionDetailAnswered from './QuestionDetailAnswered'
import QuestionDetailNotAnswered from './QuestionDetailNotAnswered'
import PageNotFound404 from './PageNotFound404'

const QuestionDetail = () => {
  const { questionId } = useParams() // "/question/:questionId"

  const loggedUser = useLoggedUser()
  const [question, author] = useQuestionAuthor(questionId)

  if (loggedUser === null) {
    // will be redirected to /login
    return null
  }

  if (question === null || author === null) {
    return (
      <PageNotFound404 text={`Question with id '${questionId}' not found.`} />
    )
  }

  const isAnswered = Object.keys(loggedUser.answers).includes(questionId)

  if (isAnswered) {
    return (
      <QuestionDetailAnswered
        question={question}
        author={author}
        loggedUser={loggedUser}
      />
    )
  } else {
    return (
      <QuestionDetailNotAnswered
        question={question}
        author={author}
        loggedUser={loggedUser}
      />
    )
  }
}

export default QuestionDetail
