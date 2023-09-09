import React, { FC } from 'react'
import './MyButton.css'

export interface MyButtonProps {
  children: any
  fvclassname?: string
  disabled?: boolean
}

const MyButton: FC<MyButtonProps> = ({
  children,
  fvclassname = 'small',
  disabled,
  ...props
}) => {
  const classNames = ['fv-button']
  if (fvclassname) {
    classNames.push(fvclassname)
  }

  return (
    <button
      {...props}
      className={classNames.join(' ')}
      disabled={disabled ? true : false}
    >
      <span>{children}</span>
    </button>
  )
}

export default MyButton
