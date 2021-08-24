import { IInside } from '../interface/IInside'
export class InsideDTO {
  id?: number
  asiento_conductor?: number
  asiento_acompañante?: number
  techo?: number
  maletero?: number
  car_id: number

  constructor(data: IInside) {
    data.id && (this.id = data.id)
    this.asiento_acompañante = data.asiento_acompañante
    this.asiento_conductor = data.asiento_conductor
    this.techo = data.techo
    this.maletero = data.maletero
    this.car_id = data.car_id
  }
}
