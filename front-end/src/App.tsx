import React from 'react'
import './index.css'
import ProgressCenterComponent from './component/ProgressCenterComponent'
import useCarDetail from './hook/useCarDetail'
import CarDetailScreen from './screen/CarDetailScreen'
import CarsListScreen from './screen/CarsListScreen'
import useStyles from './style/appStyle'

export const App = (): JSX.Element => {
  const { carDetail, carSelected, InfoCars } = useCarDetail()
  const classes = useStyles()

  const inProgress =
    (!carDetail.car && carSelected) ||
    (carDetail.car && carSelected && +carDetail.car.id !== carSelected) ||
    !InfoCars




  return (
    <>
      {inProgress && <ProgressCenterComponent />}
      <div className={classes.container}>
        <CarsListScreen />
        {carDetail.car && <CarDetailScreen />}
      </div>
    </>
  )
}

export default App
