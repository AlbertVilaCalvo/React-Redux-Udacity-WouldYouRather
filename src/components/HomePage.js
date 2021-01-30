import './HomePage.css'
import { useState } from 'react'
import QuestionList from './QuestionList'
import Loading from './Loading'
import useLoggedUser from '../loggeduser/useLoggedUser'
import useQuestions from '../questions/useQuestions'

const HomePage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0) // 0 or 1

  const tabClass = (tabIndex) =>
    selectedTabIndex === tabIndex ? 'button-primary' : 'button-primary-disabled'

  const loggedUser = useLoggedUser()
  const questions = useQuestions()
  let answeredQuestions = null
  let notAnsweredQuestions = null
  if (loggedUser !== null && questions !== null) {
    const answeredQuestionsIds = Object.keys(loggedUser.answers)
    answeredQuestions = questions.filter((q) =>
      answeredQuestionsIds.includes(q.id)
    )
    notAnsweredQuestions = questions.filter(
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
      {answeredQuestions === null || notAnsweredQuestions === null ? (
        <Loading />
      ) : selectedTabIndex === 0 ? (
        <QuestionList questions={notAnsweredQuestions} />
      ) : (
        <QuestionList questions={answeredQuestions} />
      )}
    </div>
  )
}

export default HomePage
