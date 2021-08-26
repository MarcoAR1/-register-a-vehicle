import React, { Context, createContext, useEffect, useState } from 'react'
import { CarDetailProviderProps, ObjectIndex } from '../interface/interface'
import { getCars } from '../service/getInfoCar'

// eslint-disable-next-line
const CarDetailContext: Context<any> = createContext({})

export const CarDetailProvider = ({
  children,
}: CarDetailProviderProps): JSX.Element => {
  const [InfoCars, setInfoCars] = useState<
    ObjectIndex<ObjectIndex<string | number>>[]
  >([])
  const [carDetail, setCarDetail] = useState<ObjectIndex<string | number>>({})
  const [keyCarDetail, setKeyCarDetail] = useState<string[]>([])
  const [tab, setTab] = useState<number>(0)
  const [carImage, setCarImage] = useState<ObjectIndex<string>>({})
  const [keyCarImage, setKeyCarImage] = useState<string[]>([])

  useEffect(() => {
    getCars().then((res) => res.json().then((data) => setInfoCars(data)))
  }, [])

  return (
    <CarDetailContext.Provider
      value={{
        carDetail,
        setCarDetail,
        InfoCars,
        setInfoCars,
        keyCarDetail,
        setKeyCarDetail,
        tab,
        setTab,
        carImage,
        setCarImage,
        keyCarImage,
        setKeyCarImage
      }}
    >
      {children}
    </CarDetailContext.Provider>
  )
}

export default CarDetailContext
