import { _getQuestions, _saveQuestionAnswer } from '../utils/_DATA'
import { saveQuestionAnswerToLocalUser } from '../users/users'

export const ANSWER_1 = 'optionOne'
export const ANSWER_2 = 'optionTwo'

const SET_QUESTIONS = 'SET_QUESTIONS'
const SAVE_QUESTION_ANSWER_TO_QUESTION = 'SAVE_QUESTION_ANSWER_TO_QUESTION'

const setQuestions = (questions) => {
  return {
    type: SET_QUESTIONS,
    questions,
  }
}

const saveQuestionAnswerToLocalQuestion = (userId, questionId, answer) => {
  return {
    type: SAVE_QUESTION_ANSWER_TO_QUESTION,
    userId,
    questionId,
    answer,
  }
}

export const getQuestions = () => {
  return (dispatch) => {
    _getQuestions().then((questions) => dispatch(setQuestions(questions)))
  }
}

export const saveQuestionAnswer = ({ userId, questionId, answer }) => {
  return (dispatch) => {
    // Update local Redux store
    dispatch(saveQuestionAnswerToLocalQuestion(userId, questionId, answer))
    dispatch(saveQuestionAnswerToLocalUser(userId, questionId, answer))
    // Update remote API
    _saveQuestionAnswer({
      authedUser: userId,
      qid: questionId,
      answer,
    })
  }
}

export const questionsReducer = (state = null, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.questions
    case SAVE_QUESTION_ANSWER_TO_QUESTION:
      const questionId = action.questionId
      const answer = action.answer
      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [answer]: {
            ...state[questionId][answer],
            votes: state[questionId][answer].votes.concat(action.userId),
          },
        },
      }
    default:
      return state
  }
}
