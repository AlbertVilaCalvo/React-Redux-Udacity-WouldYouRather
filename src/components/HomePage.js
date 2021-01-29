import './HomePage.css'
import React, { useState } from 'react'

const HomePage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0) // 0 or 1

  const tabClass = (tabIndex) =>
    selectedTabIndex === tabIndex ? 'button-primary' : 'button-primary-disabled'

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
    </div>
  )
}

export default HomePage
