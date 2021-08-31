import { List } from '@material-ui/core'
import React from 'react'
import { ListCarsProps } from '../interface/interface'
import CarItemList from './CarItemList'

const ListCars = ({ InfoCars, onClick }: ListCarsProps): JSX.Element => {
  return (
    <List>
      {InfoCars.map((car, index) => (
        <React.Fragment key={car.id}>
          <CarItemList
            isLast={InfoCars.length - 1 === index}
            propety={car.propietario}
            email={`${car.email}`}
            carName={`${car.marca} ${car.modelo} ${car.motor} ${car.generación}`}
            image={JSON.parse(car.image).front}
            onClick={onClick.bind(null, car.id)}
          />
        </React.Fragment>
      ))}
    </List>
  )
}

export default ListCars
