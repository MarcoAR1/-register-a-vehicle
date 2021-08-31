import { CircularProgress } from '@material-ui/core'
import React from 'react'

const ProgressCenterComponent = (): JSX.Element => {
  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 2,
      }}
    >
      <CircularProgress />
    </div>
  )
}

export default ProgressCenterComponent
