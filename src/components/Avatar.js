import PropTypes from 'prop-types'

const style = {
  borderRadius: '50%',
}

const Avatar = ({ user, size = 'large', ...props }) => {
  const px = size === 'large' ? '120px' : '35px'
  return (
    <img
      src={user.avatarURL}
      style={{ ...style, width: px, height: px }}
      alt={user.name}
      {...props}
    />
  )
}

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
}

export default Avatar
