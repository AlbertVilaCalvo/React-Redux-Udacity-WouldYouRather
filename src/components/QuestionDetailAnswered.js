import PropTypes from 'prop-types'
import Avatar from './Avatar'
import { ANSWER_1, ANSWER_2 } from '../questions/questions'

const QuestionDetailAnswered = ({ question, author, loggedUser }) => {
  const votes1 = question.optionOne.votes.length
  const votes2 = question.optionTwo.votes.length
  const totalVotes = votes1 + votes2
  const percent = (votes) => `${((votes / totalVotes) * 100).toFixed(0)}%`

  const loggedUserAnswer = loggedUser.answers[question.id]
  const votedClass = (option) =>
    option === loggedUserAnswer ? 'question-voted' : ''

  return (
    <div className="container-with-border">
      <div className="question-author-container">
        <p>
          <strong>{author.name}</strong> asks
        </p>
        <Avatar user={author} />
      </div>
      <div className="question-wouldyourather-options-container">
        <p>Results</p>
        <div className="question-options-container">
          <div className={`question-option-container ${votedClass(ANSWER_1)}`}>
            {loggedUserAnswer === ANSWER_1 && (
              <p className="question-my-answer">My Answer</p>
            )}
            <p className="question-option">{question.optionOne.text}</p>
            <p className="question-votes">
              {votes1}/{totalVotes} votes ({percent(votes1)})
            </p>
          </div>
          <div className={`question-option-container ${votedClass(ANSWER_2)}`}>
            {loggedUserAnswer === ANSWER_2 && (
              <p className="question-my-answer">My Answer</p>
            )}
            <p className="question-option">{question.optionTwo.text}</p>
            <p className="question-votes">
              {votes2}/{totalVotes} votes ({percent(votes2)})
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

QuestionDetailAnswered.propTypes = {
  question: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  loggedUser: PropTypes.object.isRequired,
}

export default QuestionDetailAnswered
