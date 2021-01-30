import { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Avatar from './Avatar'
import { ANSWER_1, ANSWER_2 } from '../questions/questions'

const NO_ANSWER = ''

const QuestionDetailUnanswered = ({ question, author, loggedUser }) => {
  const dispatch = useDispatch()

  const [selectedAnswer, setSelectedAnswer] = useState(NO_ANSWER)

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <div className="questionlistitem-author-container">
        <p>
          <strong>{author.name}</strong> asks
        </p>
        <Avatar user={author} />
      </div>
      <div className="questionlistitem-wouldyourather-options-container">
        <p>Would you rather...</p>
        <form
          onSubmit={onSubmit}
          className="questionlistitem-options-container"
        >
          <label>
            <input
              type="radio"
              name="question"
              value={ANSWER_1}
              checked={selectedAnswer === ANSWER_1}
              onChange={() => setSelectedAnswer(ANSWER_1)}
              required
              className="questionlistitem-question"
            />
            {question.optionOne.text}
          </label>
          <label>
            <input
              type="radio"
              name="question"
              value={ANSWER_2}
              checked={selectedAnswer === ANSWER_2}
              onChange={() => setSelectedAnswer(ANSWER_2)}
              className="questionlistitem-question"
            />
            {question.optionTwo.text}
          </label>
          <input
            type="submit"
            value="Submit"
            disabled={selectedAnswer === NO_ANSWER}
          />
        </form>
      </div>
    </div>
  )
}

QuestionDetailUnanswered.propTypes = {
  question: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  loggedUser: PropTypes.object.isRequired,
}

export default QuestionDetailUnanswered
