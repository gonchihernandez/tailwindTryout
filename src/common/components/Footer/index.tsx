import React from 'react'

interface FooterProps {
  children: React.ReactElement
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-end items-end p-4 gap-10">
      {children}
    </div>
  )
}

export default Footer
