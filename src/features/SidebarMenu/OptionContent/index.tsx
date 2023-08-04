import React, { useCallback } from 'react'
import Icon from 'common/components/Icon'
import activo from 'assets/images/activo.png'
import { ResponseDataType } from '../types'

interface OptionContentProps {
  title?: string
  data: ResponseDataType[] | null
  handleSuboptionSelection: (suboption: ResponseDataType) => void
  selectedOptionTitle?: string
}

const OptionContent: React.FC<OptionContentProps> = React.memo(
  ({ title, data, handleSuboptionSelection, selectedOptionTitle }) => {
    const onClickSuboption = useCallback(
      (suboption: ResponseDataType) => {
        handleSuboptionSelection(suboption)
      },
      [handleSuboptionSelection]
    )

    return (
      <>
        <p className="cursor-default text-xl font-bold text-zinc-600 pb-1">
          {title}
        </p>
        {data?.map((suboption) => (
          <button
            key={suboption.name}
            className="bg-white w-full rounded flex justify-between items-center p-2 mb-2.5"
            onClick={() => onClickSuboption(suboption)}
          >
            <p className="text-xs text-zinc-600 pl-1">{suboption.name}</p>
            <Icon
              src={activo}
              alt={`${selectedOptionTitle} open`}
              className="h-4 rotate-180"
            />
          </button>
        ))}
      </>
    )
  }
)

export default OptionContent
