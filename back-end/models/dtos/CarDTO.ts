import { ICar } from '../interface/ICar'
export class CarDTO {
  id?: number
  general: number
  documentación_y_mantenimiento: number
  ruedas__frenos__suspension_y_dirección: number
  carrocería: number
  motor: number
  alumbrado: number
  volante_y_tablero: number
  interior_y_asientos: number
  interior_general: number

  constructor(car: ICar) {
    car.id && (this.id = car.id)
    this.general = car.general
    this.documentación_y_mantenimiento = car.documentación_y_mantenimiento
    this.ruedas__frenos__suspension_y_dirección =
      car.ruedas__frenos__suspension_y_dirección
    this.carrocería = car.carrocería
    this.motor = car.motor
    this.alumbrado = car.alumbrado
    this.volante_y_tablero = car.volante_y_tablero
    this.interior_y_asientos = car.interior_y_asientos
    this.interior_general = car.interior_general
  }
}
