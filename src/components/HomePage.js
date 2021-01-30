import './HomePage.css'
import React, { useState } from 'react'
import QuestionList from './QuestionList'
import Loading from './Loading'
import useLoggedUser from '../loggeduser/useLoggedUser'
import useQuestions from '../questions/useQuestions'

const HomePage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0) // 0 or 1

  const tabClass = (tabIndex) =>
    selectedTabIndex === tabIndex ? 'button-primary' : 'button-primary-disabled'

  const user = useLoggedUser()
  const questions = useQuestions()
  let answeredQuestions = null
  let unansweredQuestions = null
  if (user !== null && questions !== null) {
    const answeredQuestionsIds = Object.keys(user.answers)
    answeredQuestions = questions.filter((q) =>
      answeredQuestionsIds.includes(q.id)
    )
    unansweredQuestions = questions.filter(
      (q) => !answeredQuestionsIds.includes(q.id)
    )
  }

  return (
    <div>
      <nav>
        <ul className="home-nav-ul">
          <li>
            <button
              className={`button ${tabClass(0)}`}
              onClick={() => setSelectedTabIndex(0)}
            >
              Unanswered Questions
            </button>
          </li>
          <li>
            <button
              className={`button ${tabClass(1)}`}
              onClick={() => setSelectedTabIndex(1)}
            >
              Answered Questions
            </button>
          </li>
        </ul>
      </nav>
      {answeredQuestions === null || unansweredQuestions === null ? (
        <Loading />
      ) : selectedTabIndex === 0 ? (
        <QuestionList questions={answeredQuestions} />
      ) : (
        <QuestionList questions={unansweredQuestions} />
      )}
    </div>
  )
}

export default HomePage
