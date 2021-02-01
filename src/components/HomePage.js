import './HomePage.css'
import { useState } from 'react'
import QuestionList from './QuestionList'
import Loading from './Loading'
import useLoggedUser from '../loggeduser/useLoggedUser'
import useQuestionsSorted from '../questions/useQuestionsSorted'

const HomePage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0) // 0 or 1
  const loggedUser = useLoggedUser()
  const questions = useQuestionsSorted()

  if (loggedUser === null) {
    // will be redirected to /login
    return null
  }

  if (questions === null) {
    return <Loading />
  }

  const tabClass = (tabIndex) =>
    selectedTabIndex === tabIndex ? 'button-primary' : 'button-primary-disabled'

  const answeredQuestionsIds = Object.keys(loggedUser.answers)
  const answeredQuestions = questions.filter((q) =>
    answeredQuestionsIds.includes(q.id)
  )
  const notAnsweredQuestions = questions.filter(
    (q) => !answeredQuestionsIds.includes(q.id)
  )

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
      {selectedTabIndex === 0 ? (
        <QuestionList questions={notAnsweredQuestions} />
      ) : (
        <QuestionList questions={answeredQuestions} />
      )}
    </div>
  )
}

export default HomePage
