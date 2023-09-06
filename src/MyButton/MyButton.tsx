import React, { FC } from 'react'
import './MyButton.css'

export interface MyButtonProps {
  children: any
  color: string
  big?: boolean
}

const MyButton: FC<MyButtonProps> = ({ children, color, big, ...props }) => {
  const rootClasses = ['my-button']

  if (big) {
    rootClasses.push('my-button-big')
  }

  return (
    <button {...props} className={rootClasses.join(' ')} style={{ color }}>
      {children}
    </button>
  )
}

export default MyButton
