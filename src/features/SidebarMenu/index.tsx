import React, { useState, useEffect } from 'react'
import Drawer from './Drawer'
import MenuOptions from './MenuOptions'
import OptionContent from './OptionContent'
import SuboptionContent from './SuboptionContent'
import useAxiosFetchData from './hooks/useFetchData'
import { Option, ResponseDataType } from './types'
import { MenuNames } from './constants'

const SidebarMenu: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const [selectedSuboption, setSelectedSuboption] =
    useState<ResponseDataType | null>(null)
  const [urlToFetch, setUrlToFetch] = useState<string>('')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const { EQUIPAMIENTO, ABERTURAS } = MenuNames

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option)
    setSelectedSuboption(null)
    setIsDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
    setSelectedOption(null)
  }

  const handleSuboptionSelection = (suboption: ResponseDataType) => {
    setSelectedSuboption(suboption)
  }

  const onClickBack = () => {
    setSelectedSuboption(null)
  }

  useEffect(() => {
    let url
    switch (selectedOption?.title) {
      case EQUIPAMIENTO:
        url = import.meta.env.VITE_EQUIPAMIENTO_BACKEND_URL
        break
      case ABERTURAS:
        url = import.meta.env.VITE_ABERTURAS_BACKEND_URL
        break
      default:
        url = import.meta.env.VITE_TERMINACIONES_BACKEND_URL
    }
    setUrlToFetch(url)
  }, [selectedOption])

  const { data, loading, error } =
    useAxiosFetchData<ResponseDataType[]>(urlToFetch)

  const hasDataAndNoSuboptionSelected = data && !selectedSuboption

  return (
    <aside className="w-32 bg-white flex flex-col justify-center">
      <MenuOptions
        selectedOption={selectedOption}
        handleOptionSelect={handleOptionSelect}
      />
      {isDrawerOpen && (
        <Drawer onClose={handleDrawerClose}>
          <>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {hasDataAndNoSuboptionSelected && (
              <OptionContent
                title={selectedOption?.title}
                data={data}
                handleSuboptionSelection={handleSuboptionSelection}
                selectedOptionTitle={selectedOption?.title}
              />
            )}
            {selectedSuboption && (
              <SuboptionContent
                selectedOptionTitle={selectedOption?.title}
                selectedSuboption={selectedSuboption}
                onClickBack={onClickBack}
              />
            )}
          </>
        </Drawer>
      )}
    </aside>
  )
}

export default SidebarMenu
