import './NewQuestionForm.css'
import { useDispatch } from 'react-redux'
import useLoggedUser from '../loggeduser/useLoggedUser'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { saveNewQuestion } from '../questions/questions'

const NewQuestionForm = () => {
  const dispatch = useDispatch()
  const loggedUser = useLoggedUser()
  const history = useHistory()

  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(saveNewQuestion(option1, option2, loggedUser.id))
    history.push('/')
  }

  if (loggedUser === null) {
    // will be redirected to /login
    return null
  }

  return (
    <div className="newquestion-container">
      <h1>Create New Question</h1>
      <p>Would you rather?</p>
      <form onSubmit={onSubmit} className="newquestion-form">
        <input
          type="text"
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
          placeholder="First option"
        />
        <input
          type="text"
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
          placeholder="Second option"
        />
        <input
          type="submit"
          value="Submit"
          disabled={option1 === '' || option2 === ''}
          className="button button-white"
        />
      </form>
    </div>
  )
}

export default NewQuestionForm
