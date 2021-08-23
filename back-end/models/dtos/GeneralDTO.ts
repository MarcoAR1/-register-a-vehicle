import { IGeneral } from '../interface/IGeneral'
export class GeneralDTO {
  id?: number
  marca: string
  modelo: string
  generación: string
  motor: string
  tipo_de_carrocería: string
  numero_de_puertas: string
  numero_de_plazas: string

  constructor(general: IGeneral) {
    general.id && (this.id = general.id)
    this.marca = general.marca
    this.modelo = general.modelo
    this.generación = general.generación
    this.motor = general.motor
    this.tipo_de_carrocería = general.tipo_de_carrocería
    this.numero_de_puertas = general.numero_de_puertas
    this.numero_de_plazas = general.numero_de_plazas
  }
}
