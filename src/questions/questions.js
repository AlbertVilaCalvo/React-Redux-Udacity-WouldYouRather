import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from '../utils/_DATA'
import {
  saveNewQuestionToLocalUser,
  saveQuestionAnswerToLocalUser,
} from '../users/users'

export const ANSWER_1 = 'optionOne'
export const ANSWER_2 = 'optionTwo'

const SET_QUESTIONS = 'SET_QUESTIONS'
const SAVE_QUESTION_ANSWER_TO_QUESTION = 'SAVE_QUESTION_ANSWER_TO_QUESTION'
const SAVE_NEW_QUESTION_TO_QUESTIONS = 'SAVE_NEW_QUESTION_TO_QUESTIONS'

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

const saveNewQuestionToLocalQuestions = (question) => {
  return {
    type: SAVE_NEW_QUESTION_TO_QUESTIONS,
    question,
  }
}

export const getQuestions = () => {
  return (dispatch) => {
    _getQuestions().then((questions) => dispatch(setQuestions(questions)))
  }
}

export const saveQuestionAnswer = ({ userId, questionId, answer }) => {
  // TODO update remote API first, then local database
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

export const saveNewQuestion = (option1, option2, userId) => {
  const question = {
    optionOneText: option1,
    optionTwoText: option2,
    author: userId,
  }
  return (dispatch) => {
    _saveQuestion(question).then((questionWithIdAndTimestamp) => {
      dispatch(saveNewQuestionToLocalQuestions(questionWithIdAndTimestamp))
      dispatch(saveNewQuestionToLocalUser(questionWithIdAndTimestamp))
    })
  }
}

export const questionsReducer = (state = null, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.questions
    case SAVE_QUESTION_ANSWER_TO_QUESTION:
      const questionId = action.questionId
      const answer = action.answer // 'optionOne' or 'optionTwo'
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
    // With immer we would do:
    // return produce(state, (draftState) => {
    //   draftState[questionId][answer].votes.push(action.userId)
    // })
    case SAVE_NEW_QUESTION_TO_QUESTIONS:
      return { ...state, [action.question.id]: action.question }
    default:
      return state
  }
}
