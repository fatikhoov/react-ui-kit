import React, { FC } from 'react'
import './MyInput.css'

export interface MyInputProps {
  big: boolean
  placeholder: string
  label: string
}

const MyInput: FC<MyInputProps> = ({ big, placeholder, label, ...props }) => {
  const classes = ['my-input']
  if (big) {
    classes.push('my-input-big')
  }

  return (
    <label>
      {label}
      <input
        {...props}
        placeholder={placeholder}
        className={classes.join(' ')}
      />
    </label>
  )
}

export default MyInput
