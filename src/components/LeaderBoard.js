import './LeaderBoard.css'
import React from 'react'
import { useUsers } from '../users/useUsers'
import Loading from './Loading'
import Avatar from './Avatar'

const LeaderBoard = () => {
  const users = useUsers()

  if (users === null) {
    return <Loading />
  }

  const usersWithScore = users.map((user) => {
    const answeredQuestionsCount = Object.keys(user.answers).length
    const createdQuestionsCount = user.questions.length

    return {
      ...user,
      score: answeredQuestionsCount + createdQuestionsCount,
      answeredQuestionsCount,
      createdQuestionsCount,
    }
  })

  usersWithScore.sort((a, b) => b.score - a.score)

  return (
    <div>
      <h1>Leader Board</h1>
      <ul>
        {usersWithScore.map((user) => (
          <li key={user.id} className="container-with-border">
            <div>
              <p className="leaderboard-user-name">{user.name}</p>
              <Avatar user={user} />
            </div>
            <div className="leaderboard-info-container">
              <div className="leaderboard-info-row">
                <span className="leaderboard-info-text">Score</span>
                <span className="leaderboard-info-text">
                  Answered questions
                </span>
                <span className="leaderboard-info-text">Created questions</span>
              </div>
              <div className="leaderboard-info-row">
                <span className="leaderboard-info-number">{user.score}</span>
                <span className="leaderboard-info-number">
                  {user.answeredQuestionsCount}
                </span>
                <span className="leaderboard-info-number">
                  {user.createdQuestionsCount}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LeaderBoard
