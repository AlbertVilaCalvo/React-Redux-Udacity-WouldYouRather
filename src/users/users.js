import { _getUsers } from '../utils/_DATA'

const SET_USERS = 'SET_USERS'
const SAVE_QUESTION_ANSWER_TO_USER = 'SAVE_QUESTION_ANSWER_TO_USER'

const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  }
}

export const saveQuestionAnswerToLocalUser = (userId, questionId, answer) => {
  return {
    type: SAVE_QUESTION_ANSWER_TO_USER,
    userId,
    questionId,
    answer,
  }
}

export const getUsers = () => {
  return (dispatch) => {
    _getUsers().then((users) => dispatch(setUsers(users)))
  }
}

export const usersReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users
    case SAVE_QUESTION_ANSWER_TO_USER:
      const userId = action.userId
      return {
        ...state,
        [userId]: {
          ...state[userId],
          answers: {
            ...state[userId].answers,
            [action.questionId]: action.answer,
          },
        },
      }
    default:
      return state
  }
}
