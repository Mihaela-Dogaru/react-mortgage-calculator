import React from 'react'

function FormInputGroup({text, icon, placeholder, value, onInput, onKeyUp, readOnly= false,}) {
  return (
    <div className='input-group mb-3'>
      <span className='input-group-text'>{text} {icon}</span>
      <input 
      type='number' 
      className='form-control' 
      placeholder= {placeholder} 
      value={value}
      onInput={onInput}
    //   input-utile sunt key sensitive
      onKeyUp={onKeyUp}
      readOnly={readOnly}
       />
    </div>
  )
}

export default FormInputGroup

