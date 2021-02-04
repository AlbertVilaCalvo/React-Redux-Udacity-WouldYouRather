import { useState } from 'react'
import useInterval from '../utils/useInterval'

const SPEED_MS = 150
const SIZE = '20px'
const STYLE = { width: SIZE, height: SIZE }

const Loading = () => {
  const [index, setIndex] = useState(0) // 0, 1, 2, 3

  useInterval(() => {
    setIndex((i) => (i === 3 ? 0 : i + 1))
  }, SPEED_MS)

  const getClass = (i) => (i === index ? 'background-color-primary' : '')

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '30px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={getClass(0)} style={STYLE} />
        <div className={getClass(3)} style={STYLE} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={getClass(1)} style={STYLE} />
        <div className={getClass(2)} style={STYLE} />
      </div>
    </div>
  )
}

export default Loading
