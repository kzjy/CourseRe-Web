import React from 'react'

const alertStyle = {
   
    padding: '10px',
    textTransform: 'uppercase',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.03)',
    fontFamily: 'Arial',
    width: '40%',
    minWidth: '500px',
    boxSizing: 'border-box',
    margin:'100px'
  }

const AlertTemplate = ({ style, options, message, close }) => {
  var type = "alert alert-dismissible alert-info";
  if (options.type === 'info') {
    type = "alert alert-dismissible alert-info "; 
  } else if (options.type === 'success') {
    type = "alert alert-dismissible alert-success ";
  } else {
    type = "alert alert-dismissible alert-warning ";
  }

  return (
    <div className={type} style={alertStyle}>
      {(options.type === 'info') ? (<div><strong style={{display: 'block'}}>Heads Up!</strong></div>): ''}
      {(options.type === 'success') ?  (<div><strong style={{display: 'block'}}>Success!</strong></div>): ''}
      {(options.type === 'error') ? (<div><strong style={{display: 'block'}}>Error!</strong></div>): ''}
      {message}
      {/* <button className="button">X</button>  */}
      <button type="button" className="close" data-dismiss="alert" onClick={close} >&times;</button>
    </div>
  )
}

export default AlertTemplate;