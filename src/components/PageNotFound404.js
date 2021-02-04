import React from 'react'
import { useHistory } from 'react-router-dom'

const PageNotFound404 = () => {
  const history = useHistory()

  return (
    <>
      <h1>404</h1>
      <p style={{ marginTop: '20px', fontSize: '20px' }}>Page not found :/</p>
      <button
        className="button button-white"
        style={{ marginTop: '30px' }}
        onClick={() => history.push('/')}
      >
        Go to home
      </button>
    </>
  )
}

export default PageNotFound404
