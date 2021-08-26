import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import useCarDetail from '../hook/useCarDetail'

const CarImage = (): JSX.Element => {
  const { keyCarDetail, tab, carImage, keyCarImage } = useCarDetail()
  const [index, setIndex] = useState<number>(0)
  const handleChangeIndex = (index: number): void => {
    setIndex(index)
  }
  useEffect(() => {
    if (keyCarDetail[tab] === 'interior_general') {
      handleChangeIndex(keyCarImage.findIndex((key) => key === 'inside'))
    }
    if (keyCarDetail[tab] === 'motor') {
      handleChangeIndex(keyCarImage.findIndex((key) => key === 'engine'))
    }
    if (keyCarDetail[tab] === 'carroceria') {
      handleChangeIndex(keyCarImage.findIndex((key) => key === 'back'))
    }
    if (keyCarDetail[tab] === 'documentacion_y_mantenimiento') {
      handleChangeIndex(keyCarImage.findIndex((key) => key === 'left'))
    }
    if (keyCarDetail[tab] === 'ruedas__frenos__suspension_y_direccion') {
      handleChangeIndex(keyCarImage.findIndex((key) => key === 'right'))
    }
    if (keyCarDetail[tab] === 'car') {
      handleChangeIndex(keyCarImage.findIndex((key) => key === 'front'))
    }
  }, [tab])

  return (
    <Container>
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        {keyCarImage.map((name: string) => (
          <img
            style={{
              width: '100%',
              maxHeight: '300px',
              objectFit: 'contain',
            }}
            key={name}
            src={carImage[name]}
            alt="car"
          />
        ))}
      </SwipeableViews>
    </Container>
  )
}

export default CarImage
