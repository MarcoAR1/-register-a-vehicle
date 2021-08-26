export interface ObjectIndex<value> {
  [key: string]: value
}

export interface IContextValueCarDetail {
  carDetail: ObjectIndex<ObjectIndex<string>>
  setCarDetail: React.Dispatch<
    React.SetStateAction<ObjectIndex<ObjectIndex<string>>>
  >
  InfoCars: ObjectIndex<ObjectIndex<string>>[]
  setInfoCars: React.Dispatch<
    React.SetStateAction<ObjectIndex<ObjectIndex<string>>[]>
  >
  keyCarDetail: string[]
  setKeyCarDetail: React.Dispatch<React.SetStateAction<string[]>>
  tab: number
  setTab: React.Dispatch<React.SetStateAction<number>>
  carImage: ObjectIndex<string>
  setCarImage: React.Dispatch<React.SetStateAction<ObjectIndex<string>>>
  keyCarImage: string[]
  setKeyCarImage: React.Dispatch<React.SetStateAction<string[]>>
}

export interface CarDetailProviderProps {
  children: React.ReactChild
}

export interface RatingStartViewProps {
  value: number
  onClick: (index: number, name: string) => void
  name: string
}

export interface PanelDetailCardProps {
  index: string
}
