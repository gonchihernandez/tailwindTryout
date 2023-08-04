import React from 'react'
import Icon from 'common/components/Icon'
import { Option } from '../types'
import { MenuNames } from '../constants'
import Terminaciones from 'assets/images/Terminaciones.png'
import Equipamiento from 'assets/images/Equipamiento.png'
import Aberturas from 'assets/images/Aberturas.png'

interface MenuOptionsProps {
  selectedOption: Option | null
  handleOptionSelect: (option: Option) => void
}

const MenuOptions: React.FC<MenuOptionsProps> = ({
  selectedOption,
  handleOptionSelect
}) => {
  const { EQUIPAMIENTO, ABERTURAS, TERMINACIONES } = MenuNames

  const menuOptions = [
    { title: ABERTURAS, icon: Aberturas },
    { title: EQUIPAMIENTO, icon: Equipamiento },
    { title: TERMINACIONES, icon: Terminaciones }
  ]

  const getOptionStyle = (option: Option) =>
    option.title === selectedOption?.title
      ? 'bg-gray-200'
      : `bg-white ${getOptionBorder(option.title)}`

  const getOptionBorder = (title: string) => {
    if (selectedOption) {
      switch (selectedOption.title) {
        case EQUIPAMIENTO:
          switch (title) {
            case ABERTURAS:
              return 'rounded-br-3xl'
            case EQUIPAMIENTO:
              return 'rounded-r-3xl'
            default:
              return 'rounded-tr-3xl'
          }
        case ABERTURAS:
          switch (title) {
            case EQUIPAMIENTO:
              return 'rounded-tr-3xl'
          }
        case TERMINACIONES:
          switch (title) {
            case EQUIPAMIENTO:
              return 'rounded-br-3xl'
          }
        default:
          return ''
      }
    }
    return ''
  }

  const hasSelectedOption = () => selectedOption && 'bg-gray-200'

  return (
    <ul className={`text-center items-center ${hasSelectedOption()}`}>
      {menuOptions.map((option) => (
        <li
          key={option.title}
          className={`cursor-pointer ${getOptionStyle(option)}`}
          onClick={() => handleOptionSelect(option)}
        >
          <div className="flex items-center justify-center flex-col">
            <Icon
              src={option.icon}
              alt={`${option.title} icon`}
              className="h-8"
            />
            <p className="text-xxs">{option.title}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MenuOptions
