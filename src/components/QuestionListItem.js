import './Question.css'
import PropTypes from 'prop-types'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

const QuestionListItem = ({ question, author }) => {
  return (
    <Link to={`/question/${question.id}`} className="question-main-container">
      <div className="question-author-container">
        <p>
          <strong>{author.name}</strong> asks
        </p>
        <Avatar user={author} />
      </div>
      <div className="question-wouldyourather-options-container">
        <p>Would you rather...</p>
        <div className="question-options-container">
          <p className="question-option">{question.optionOne.text}</p>
          <p className="question-option">{question.optionTwo.text}</p>
        </div>
      </div>
    </Link>
  )
}

QuestionListItem.propTypes = {
  question: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
}

export default QuestionListItem
