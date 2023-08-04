import React, { useState } from 'react'
import Icon from '../Icon'
import Button from '../Button'
import zoomIn from 'assets/images/+.png'
import zoomOut from 'assets/images/-.png'

const ZoomButton: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(100)

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom + 10)
    console.log({ zoomLevel })
  }

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => prevZoom - 10)
    console.log({ zoomLevel })
  }

  return (
    <div className="flex flex-col items-center">
      <Button
        onClick={handleZoomIn}
        className="w-10 h-8 p-1 bg-gray-200 rounded-t-lg hover:bg-gray-300"
      >
        <Icon src={zoomIn} alt="Zoom In" className="w-full h-full" />
      </Button>
      <div className="w-10 h-px bg-gray-300"></div>
      <Button
        onClick={handleZoomOut}
        className="w-10 h-8 p-1 bg-gray-200 rounded-b-lg hover:bg-gray-300"
      >
        <Icon src={zoomOut} alt="Zoom Out" className="w-full h-full" />
      </Button>
    </div>
  )
}

export default ZoomButton
