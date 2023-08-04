import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-500 text-white hover:bg-gray-600'
      case 'success':
        return 'bg-green-500 text-white hover:bg-green-600'
      case 'danger':
        return 'bg-red-500 text-white hover:bg-red-600'
      default:
        return 'bg-gray-300 text-gray-800 hover:bg-gray-400'
    }
  }

  return (
    <button className={`px-4 py-2 rounded ${getButtonStyles()}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
