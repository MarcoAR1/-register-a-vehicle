import React, { Context, createContext, useEffect, useState } from 'react'
import { CarDetailProviderProps, ObjectIndex } from '../interface/interface'
import { getCars, getOneCar } from '../service/getInfoCar'

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
  const [carSelected, setCarSelected] = useState<number | null>(null)

  useEffect(() => {
    getCars()
      .then((res) => res.json().then((data) => setInfoCars(data)))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    if (carSelected !== null) {
      getOneCar(carSelected)
        .then((res) =>
          res
            .json()
            .then((data) => {
              const image = JSON.parse(data.image)
              setCarImage(image)
              setKeyCarImage(Object.keys(image))
              delete data.image
              setCarDetail(data)
              setKeyCarDetail(Object.keys(data))
            })
            .catch((err) => console.log(err))
        )
        .catch((err) => console.log(err))
    }
  }, [carSelected])

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
        setKeyCarImage,
        carSelected,
        setCarSelected,
      }}
    >
      {children}
    </CarDetailContext.Provider>
  )
}

export default CarDetailContext
