import PropTypes from 'prop-types'
import Loading from './Loading'
import QuestionListItem from './QuestionListItem'
import { useSelector } from 'react-redux'

const QuestionList = ({ questions }) => {
  const users = useSelector((state) => state.users)

  if (users === null) {
    return <Loading />
  }

  return (
    <div>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <QuestionListItem
              question={question}
              author={users[question.author]}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default QuestionList
