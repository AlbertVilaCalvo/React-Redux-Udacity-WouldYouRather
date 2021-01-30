import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import useQuestionAuthor from '../questions/useQuestionAuthor'

const QuestionDetail = () => {
  const { questionId } = useParams()

  const [question, author] = useQuestionAuthor(questionId)
  if (question === null || author === null) {
    return <Loading />
  }

  return (
    <div>
      <p>{question.id}</p>
      <p>{author.name}</p>
    </div>
  )
}

export default QuestionDetail
