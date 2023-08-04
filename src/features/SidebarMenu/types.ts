interface Item {
  img: string
  name: string
}

export type ResponseDataType = {
  name: string
  items: Item[]
}

export interface Option {
  title: string
  icon: string
}

export type OptionsType = Option[]
