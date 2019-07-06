import React from 'react'

const alertStyle = {
    backgroundColor: '#151515',
    color: 'white',
    padding: '10px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.03)',
    fontFamily: 'Arial',
    width: '40%',
    minWidth: '300px',
    boxSizing: 'border-box'
  }

const AlertTemplate = ({ style, options, message, close }) => (
    <div style={alertStyle}>
      {options.type === 'info' && '!'}
      {options.type === 'success' && ':)'}
      {options.type === 'error' && ':('}
      {message}
      <button onClick={close}>X</button>
    </div>
  )

export default AlertTemplate;