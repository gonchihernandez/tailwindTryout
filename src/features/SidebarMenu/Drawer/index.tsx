import React, { useCallback } from 'react'
import Icon from 'common/components/Icon'
import activo from 'assets/images/activo.png'

interface DrawerProps {
  onClose: () => void
  children: React.ReactElement
}

const Drawer: React.FC<DrawerProps> = React.memo(({ onClose, children }) => {
  const handleButtonClick = useCallback(() => {
    onClose()
  }, [onClose])

  return (
    <div
      className="absolute top-[56px] left-[-127px] h-full w-64 bg-gray-200 shadow z-10 transition-transform transform translate-x-full"
      style={{
        padding: '16px'
      }}
    >
      {children}
      <div className="absolute top-0 w-6 h-60 left-[256px] bg-gray-200" />
      <div className="absolute top-0 w-6 h-60 left-[256px] rounded-bl-3xl bg-gray-100" />
      <button
        onClick={handleButtonClick}
        className="absolute top-60 w-6 h-16 left-[249px] ml-2 rounded-r-lg bg-gray-200 border border-transparent"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Icon src={activo} alt="Close drawer" />
      </button>
      <div
        className="absolute w-6 h-60 left-[256px] bg-gray-200"
        style={{
          top: '19rem'
        }}
      />
      <div
        className="absolute w-6 h-60 left-[256px] rounded-tl-3xl bg-gray-100"
        style={{
          top: '19rem'
        }}
      />
      <div />
    </div>
  )
})

export default Drawer
