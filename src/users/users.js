import { _getUsers } from '../utils/_DATA'

const SET_USERS = 'SET_USERS'
const SAVE_QUESTION_ANSWER_TO_USER = 'SAVE_QUESTION_ANSWER_TO_USER'
const SAVE_NEW_QUESTION_TO_USER = 'SAVE_NEW_QUESTION_TO_USER'

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

export const saveNewQuestionToLocalUser = (question) => {
  return {
    type: SAVE_NEW_QUESTION_TO_USER,
    question,
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
    // With immer we would do:
    // return produce(state, (draftState) => {
    //   draftState[userId].answers[action.questionId] = action.answer
    // })
    case SAVE_NEW_QUESTION_TO_USER:
      const authorId = action.question.author
      return {
        ...state,
        [authorId]: {
          ...state[authorId],
          questions: state[authorId].questions.concat(action.question.id),
        },
      }
    // With immer we would do:
    // return produce(state, (draftState) => {
    //   draftState[authorId].questions.push(action.question.id)
    // })
    default:
      return state
  }
}
