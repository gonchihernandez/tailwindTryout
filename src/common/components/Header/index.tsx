import React from 'react'
import Dropdown from '../Dropdown'
import logo from 'assets/images/logo.png'

const Header: React.FC = () => {
  const dropdownOptions = [
    'Guardar y salir',
    'Salir sin guardar',
    'Guardar y continuar'
  ]

  return (
    <header className="flex justify-between items-center px-24 py-2 bg-gray-500">
      <div>
        <img src={logo} alt="Logo" className="w-30 h-10" />
      </div>
      <div>
        <Dropdown options={dropdownOptions} />
      </div>
    </header>
  )
}

export default Header
