import './QuestionListItem.css'
import PropTypes from 'prop-types'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

const QuestionListItem = ({ question, author }) => {
  return (
    <Link
      to={`/question/${question.id}`}
      className="questionlistitem-main-container"
    >
      <div className="questionlistitem-author-container">
        <p>
          <strong>{author.name}</strong> asks
        </p>
        <Avatar user={author} />
      </div>
      <div className="questionlistitem-wouldyourather-options-container">
        <p>Would you rather...</p>
        <div className="questionlistitem-options-container">
          <p className="questionlistitem-question">{question.optionOne.text}</p>
          <p className="questionlistitem-question">{question.optionTwo.text}</p>
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
