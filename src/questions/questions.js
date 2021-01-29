import { _getQuestions } from '../utils/_DATA'

const SET_QUESTIONS = 'SET_QUESTIONS'

const setQuestions = (questions) => {
  return {
    type: SET_QUESTIONS,
    questions,
  }
}

export const getQuestions = () => {
  return (dispatch) => {
    _getQuestions().then((questions) => dispatch(setQuestions(questions)))
  }
}

export const questionsReducer = (state = null, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.questions
    default:
      return state
  }
}
