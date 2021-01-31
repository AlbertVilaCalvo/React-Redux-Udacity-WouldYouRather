import './NewQuestionForm.css'
import { useState } from 'react'

const NewQuestionForm = () => {
  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
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
