import { IWheels } from '../interface/IWheels'
export class WheelsDTO {
  id?: number
  modelo_identico_de_neumáticos: number
  desgaste_del_neumático: number
  presión_adecuada_del_neumático: number
  llanta_sin_daños: number
  tuercas_de_seguridad: number
  espesor_de_la_pastilla_de_freno: number
  bielas: number
  rótulas: number
  tipo_de_neumático_correcto: number
  desgaste_homogeneo_de_neumáticos: number
  neumático_sin_daños: number
  tornillos_y_llave_de_llanta: number
  espesor_del_disco_de_freno: number
  brazo_de_suspensión: number
  manguetas: number
  extremos_de_dirección: number

  constructor(data: IWheels) {
    data.id && (this.id = data.id)
    this.modelo_identico_de_neumáticos = data.modelo_identico_de_neumáticos
    this.desgaste_del_neumático = data.desgaste_del_neumático
    this.presión_adecuada_del_neumático = data.presión_adecuada_del_neumático
    this.llanta_sin_daños = data.llanta_sin_daños
    this.tuercas_de_seguridad = data.tuercas_de_seguridad
    this.espesor_de_la_pastilla_de_freno = data.espesor_de_la_pastilla_de_freno
    this.bielas = data.bielas
    this.rótulas = data.rótulas
    this.tipo_de_neumático_correcto = data.tipo_de_neumático_correcto
    this.desgaste_homogeneo_de_neumáticos =
      data.desgaste_homogeneo_de_neumáticos
    this.neumático_sin_daños = data.neumático_sin_daños
    this.tornillos_y_llave_de_llanta = data.tornillos_y_llave_de_llanta
    this.espesor_del_disco_de_freno = data.espesor_del_disco_de_freno
    this.brazo_de_suspensión = data.brazo_de_suspensión
    this.manguetas = data.manguetas
    this.extremos_de_dirección = data.extremos_de_dirección
  }
}
