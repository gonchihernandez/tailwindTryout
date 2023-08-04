import React from 'react'
import Button from '../Button'
import Icon from '../Icon'
import { ArrowDirection } from './constants'
import Flecha from 'assets/images/Flecha.png'

type ArrowDirection = (typeof ArrowDirection)[keyof typeof ArrowDirection]

interface DirectionalButtonProps {
  onClick?: () => void
}

const DirectionalButton: React.FC<DirectionalButtonProps> = ({ onClick }) => {
  const { UP, DOWN, LEFT, RIGHT } = ArrowDirection

  const getIconRotation = (direction: ArrowDirection) => {
    switch (direction) {
      case RIGHT:
        return 'rotate-90'
      case DOWN:
        return 'rotate-180'
      case LEFT:
        return 'rotate-270'
      default:
        return ''
    }
  }

  const handleOnClick = (direction: ArrowDirection) => () => {
    switch (direction) {
      case UP:
        console.log('UP arrow clicked!')
        onClick && onClick()
        break
      case DOWN:
        console.log('DOWN arrow clicked!')
        onClick && onClick()
        break
      case LEFT:
        console.log('LEFT arrow clicked!')
        onClick && onClick()
        break
      case RIGHT:
        console.log('RIGHT arrow clicked!')
        onClick && onClick()
        break
      default:
        break
    }
  }

  return (
    <div className="flex items-center w-24 h-24 bg-gray-200 rounded-lg">
      <Button
        onClick={handleOnClick(LEFT)}
        className="w-8 h-8 p-1 hover:bg-gray-300"
      >
        <Icon
          src={Flecha}
          alt="Arrow left"
          className={`w-full h-full ${getIconRotation(LEFT)}`}
        />
      </Button>
      <div className="flex flex-col gap-6">
        <Button
          onClick={handleOnClick(UP)}
          className="w-8 h-8 p-1 hover:bg-gray-300"
        >
          <Icon
            src={Flecha}
            alt="Arrow up"
            className={`w-full h-full ${getIconRotation(UP)}`}
          />
        </Button>
        <Button
          onClick={handleOnClick(DOWN)}
          className="w-8 h-8 p-1 hover:bg-gray-300"
        >
          <Icon
            src={Flecha}
            alt="Arrow down"
            className={`w-full h-full ${getIconRotation(DOWN)}`}
          />
        </Button>
      </div>
      <div>
        <Button
          onClick={handleOnClick(RIGHT)}
          className="w-8 h-8 p-1 hover:bg-gray-300"
        >
          <Icon
            src={Flecha}
            alt="Arrow right"
            className={`w-full h-full ${getIconRotation(RIGHT)}`}
          />
        </Button>
      </div>
    </div>
  )
}

export default DirectionalButton
