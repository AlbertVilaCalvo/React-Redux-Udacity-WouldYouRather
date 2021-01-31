import { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Avatar from './Avatar'
import { ANSWER_1, ANSWER_2, saveQuestionAnswer } from '../questions/questions'

const NO_ANSWER = ''

const QuestionDetailNotAnswered = ({ question, author, loggedUser }) => {
  const dispatch = useDispatch()

  const [selectedAnswer, setSelectedAnswer] = useState(NO_ANSWER)

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(
      saveQuestionAnswer({
        userId: loggedUser.id,
        questionId: question.id,
        answer: selectedAnswer,
      })
    )
  }

  return (
    <div className="question-main-container">
      <div className="question-author-container">
        <p>
          <strong>{author.name}</strong> asks
        </p>
        <Avatar user={author} />
      </div>
      <div className="question-wouldyourather-options-container">
        <p>Would you rather...</p>
        <form onSubmit={onSubmit} className="question-options-container">
          <label className="question-option">
            <input
              type="radio"
              name="question"
              value={ANSWER_1}
              checked={selectedAnswer === ANSWER_1}
              onChange={() => setSelectedAnswer(ANSWER_1)}
              required
            />
            {question.optionOne.text}
          </label>
          <label className="question-option">
            <input
              type="radio"
              name="question"
              value={ANSWER_2}
              checked={selectedAnswer === ANSWER_2}
              onChange={() => setSelectedAnswer(ANSWER_2)}
            />
            {question.optionTwo.text}
          </label>
          <input
            type="submit"
            value="Submit"
            disabled={selectedAnswer === NO_ANSWER}
            className="button button-white"
          />
        </form>
      </div>
    </div>
  )
}

QuestionDetailNotAnswered.propTypes = {
  question: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  loggedUser: PropTypes.object.isRequired,
}

export default QuestionDetailNotAnswered
