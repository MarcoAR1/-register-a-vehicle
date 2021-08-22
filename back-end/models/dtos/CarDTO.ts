import { ICar } from './ICar'

export class CarDTO {
  id?: number
  general: { [index: string]: number }
  DOCUMENTACION_Y_MANTENIMIENTO: { [index: string]: number }
  RUEDAS__FRENOS__SUSPENSION_Y_DIRECCION: { [index: string]: number }
  CARROCERIA: { [index: string]: number }
  MOTOR: { [index: string]: number }
  ALUMBRADO: { [index: string]: number }
  VOLANTE_Y_TABLERO: { [index: string]: number }
  INTERIOR_Y_ASIENTOS: { [index: string]: number }
  INTERIOR_GENERAL: { [index: string]: number }

  constructor(car: ICar) {
    this.id = car.id
    this.general = JSON.parse(car.general)
    this.DOCUMENTACION_Y_MANTENIMIENTO = JSON.parse(
      car.DOCUMENTACION_Y_MANTENIMIENTO
    )
    this.RUEDAS__FRENOS__SUSPENSION_Y_DIRECCION = JSON.parse(
      car.RUEDAS__FRENOS__SUSPENSION_Y_DIRECCION
    )
    this.CARROCERIA = JSON.parse(car.CARROCERIA)
    this.MOTOR = JSON.parse(car.MOTOR)
    this.ALUMBRADO = JSON.parse(car.ALUMBRADO)
    this.VOLANTE_Y_TABLERO = JSON.parse(car.VOLANTE_Y_TABLERO)
    this.INTERIOR_Y_ASIENTOS = JSON.parse(car.INTERIOR_Y_ASIENTOS)
    this.INTERIOR_GENERAL = JSON.parse(car.INTERIOR_GENERAL)
  }
}
