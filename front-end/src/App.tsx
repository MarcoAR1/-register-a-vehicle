import React, { useEffect } from 'react'
import CarImage from './component/CarImage'
import DataInformationContainer from './component/DataInformationContainer'
import useCarDetail from './hook/useCarDetail'
import { getOneCar } from './service/getInfoCar'
export const App = (): JSX.Element => {
  const { setCarDetail, setKeyCarDetail, setCarImage, setKeyCarImage } =
    useCarDetail()
  useEffect(() => {
    getOneCar(1).then((res) =>
      res.json().then((data) => {
        const image = JSON.parse(data.image)
        setCarImage(image)
        setKeyCarImage(Object.keys(image))
        delete data.image
        setCarDetail(data)
        setKeyCarDetail(Object.keys(data))
      })
    )
  }, [])

  return (
    <div className="App">
      <CarImage />
      <DataInformationContainer />
    </div>
  )
}

export default App
