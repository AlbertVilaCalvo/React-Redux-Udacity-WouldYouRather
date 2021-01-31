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
          <li>
            <Avatar user={user} />
            <p>{user.name}</p>
            <p>Score: {user.score}</p>
            <p>Answered questions: {user.answeredQuestionsCount}</p>
            <p>Created questions: {user.createdQuestionsCount}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LeaderBoard
