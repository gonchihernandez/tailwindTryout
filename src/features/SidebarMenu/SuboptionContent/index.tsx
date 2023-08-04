import React, { useCallback } from 'react'
import Icon from 'common/components/Icon'
import activo from 'assets/images/activo.png'
import EmptyImage from 'assets/images/EmptyImage.jpeg'
import { ResponseDataType } from '../types'

interface SuboptionContentProps {
  selectedOptionTitle?: string
  selectedSuboption: ResponseDataType
  onClickBack: () => void
}

const SuboptionContent: React.FC<SuboptionContentProps> = React.memo(
  ({ selectedOptionTitle, selectedSuboption, onClickBack }) => {
    const handleOnClickBack = useCallback(() => {
      onClickBack()
    }, [onClickBack])

    return (
      <>
        <button
          className="text-xs text-zinc-600 pb-1 flex justify-between items-center"
          onClick={handleOnClickBack}
        >
          <Icon src={activo} alt="Close drawer" className="h-3" />
          {selectedOptionTitle}
        </button>
        <p className="cursor-default text-xl font-bold text-zinc-600 pb-1">
          {selectedSuboption.name}
        </p>
        <div className="grid grid-cols-3 gap-4">
          {selectedSuboption.items.map(({ img, name }) => (
            <div key={name} className="flex items-center flex-col">
              <img
                src={img}
                alt={`${name} image`}
                className="w-full h-16 bg-gray-200"
                onError={(e) => {
                  e.currentTarget.src = EmptyImage
                }}
              />
              <p className="text-xs text-zinc-600">{name}</p>
            </div>
          ))}
        </div>
      </>
    )
  }
)

export default SuboptionContent
