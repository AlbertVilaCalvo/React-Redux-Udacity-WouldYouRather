import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const PageNotFound404 = ({ text = 'Page not found :/' }) => {
  const history = useHistory()

  return (
    <>
      <h1>404</h1>
      <p className="p-404">{text}</p>
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

PageNotFound404.propTypes = {
  text: PropTypes.string,
}

export default PageNotFound404
