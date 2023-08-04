import React, { useState } from 'react'
import Icon from '../Icon'
import activo from 'assets/images/activo.png'

interface DropdownProps {
  options: string[]
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0])

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="relative z-1">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 text-gray-800 bg-white border border-gray-300 rounded"
      >
        <span>{selectedOption}</span>
        <div className="border-l border-gray-300 h-6 mx-2" />
        <Icon
          src={activo}
          alt="Dropdown open icon"
          className="w-5 h-5 rotate-270"
        />
      </button>
      {isOpen && (
        <ul
          className="absolute top-10 left-0 w-32 bg-white border border-gray-300 rounded shadow z-1"
          style={{ zIndex: 1 }}
        >
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-500 text-gray-800"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
