import { IBodywork } from '../interface/IBodywork'
export class BodyworkDTO {
  id?: number
  bajos_del_paragolpe_delantero?: number
  capó?: number
  guardabarro_delantero_derecho?: number
  espejo_retrovisor_izquierdo?: number
  panel_exterior___puerta_delantera_izquierda___?: number
  bisagra___puerta_delantera_izquierda___?: number
  manija_exterior___puerta_delantera_derecha___?: number
  parabrisas_delantero?: number
  paragolpe_delantero?: number
  guardabarro_delantero_izquierdo?: number
  parabrisas?: number
  espejo_retrovisor_derecho?: number
  manija___puerta_delantera_izquierda___?: number
  panel_exterior___puerta_delantera_derecha___?: number
  bisagra___puerta_delantera_derecha___?: number
  talonera_izquierda?: number
  car_id: number
  constructor(data: IBodywork) {
    data.id && (this.id = data.id)
    this.bajos_del_paragolpe_delantero = data.bajos_del_paragolpe_delantero
    this.capó = data.capó
    this.guardabarro_delantero_derecho = data.guardabarro_delantero_derecho
    this.espejo_retrovisor_izquierdo = data.espejo_retrovisor_izquierdo
    this.panel_exterior___puerta_delantera_izquierda___ =
      data.panel_exterior___puerta_delantera_izquierda___
    this.bisagra___puerta_delantera_izquierda___ =
      data.bisagra___puerta_delantera_izquierda___
    this.manija_exterior___puerta_delantera_derecha___ =
      data.manija_exterior___puerta_delantera_derecha___
    this.parabrisas_delantero = data.parabrisas_delantero
    this.paragolpe_delantero = data.paragolpe_delantero
    this.guardabarro_delantero_izquierdo = data.guardabarro_delantero_izquierdo
    this.parabrisas = data.parabrisas
    this.espejo_retrovisor_derecho = data.espejo_retrovisor_derecho
    this.manija___puerta_delantera_izquierda___ =
      data.manija___puerta_delantera_izquierda___
    this.panel_exterior___puerta_delantera_derecha___ =
      data.panel_exterior___puerta_delantera_derecha___
    this.bisagra___puerta_delantera_derecha___ =
      data.bisagra___puerta_delantera_derecha___
    this.talonera_izquierda = data.talonera_izquierda
    this.car_id = data.car_id
  }
}
