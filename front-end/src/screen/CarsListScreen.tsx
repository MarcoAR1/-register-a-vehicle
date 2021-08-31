import { Container } from '@material-ui/core'
import React, { createRef, useCallback } from 'react'
import ListCars from '../component/ListCars'
import ModalComponent from '../component/ModalComponent'
import useCarDetail from '../hook/useCarDetail'
import { IModelRef } from '../interface/interface'

const CarsListScreen = (): JSX.Element => {
  const { carDetail, InfoCars, setCarSelected, setTab } = useCarDetail()
  const ModalRef = createRef<IModelRef>()

  const handleSelectCar = useCallback(
    (carId: string) => {
      ModalRef.current?.handleClose()
      setCarSelected(+carId)
      setTab(1)
    },
    [setCarSelected, ModalRef]
  )

  return (
    <Container
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <ModalComponent
        LabelButton="view Cars"
        Title="Select a Car"
        condicional={!carDetail}
        ref={ModalRef}
      >
        <ListCars InfoCars={InfoCars} onClick={handleSelectCar} />
      </ModalComponent>
    </Container>
  )
}

export default CarsListScreen
