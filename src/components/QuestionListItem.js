import './QuestionListItem.css'
import React from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar'

const QuestionListItem = ({ question, author }) => {
  return (
    <div className="questionlistitem-main-container">
      <div className="questionlistitem-author-container">
        <p>
          <strong>{author.name}</strong> asks
        </p>
        <Avatar user={author} />
      </div>
      <div className="questionlistitem-options-container">
        <p>Would you rather...</p>
        <p className="questionlistitem-question">{question.optionOne.text}</p>
        <p className="questionlistitem-question">{question.optionTwo.text}</p>
      </div>
    </div>
  )
}

QuestionListItem.propTypes = {
  question: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
}

export default QuestionListItem
