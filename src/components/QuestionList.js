import React from 'react'
import PropTypes from 'prop-types'

const QuestionList = ({ questions }) => {
  return (
    <div>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.id}</li>
        ))}
      </ul>
    </div>
  )
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default QuestionList
