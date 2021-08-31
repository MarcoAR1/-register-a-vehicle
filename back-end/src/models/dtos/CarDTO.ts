import { ICar } from '../interface/ICar'
export class CarDTO {
  id?: number
  propietario: string
  email: string
  km: string
  precio: string
  marca: string
  modelo: string
  generación: string
  motor: string
  tipo_de_carrocería: string
  numero_de_puertas: string
  numero_de_plazas: string
  image?: string

  constructor(car: ICar) {
    car.id && (this.id = car.id)
    this.propietario = car.propietario
    this.email = car.email
    this.km = car.km
    this.precio = car.precio
    this.marca = car.marca
    this.modelo = car.modelo
    this.generación = car.generación
    this.motor = car.motor
    this.tipo_de_carrocería = car.tipo_de_carrocería
    this.numero_de_puertas = car.numero_de_puertas
    this.numero_de_plazas = car.numero_de_plazas
    this.image = car.image
  }
}
