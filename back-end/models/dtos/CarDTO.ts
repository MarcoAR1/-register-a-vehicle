import { ICar } from '../interface/ICar'
export class CarDTO {
  id?: number
  propietario: string
  email: string
  km: string
  precio: string
  image: string

  constructor(car: ICar) {
    car.id && (this.id = car.id)
    this.propietario = car.propietario
    this.email = car.email
    this.km = car.km
    this.precio = car.precio
    this.image = car.image
  }
}
