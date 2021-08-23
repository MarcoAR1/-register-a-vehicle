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

  constructor(Wheels: IWheels) {
    Wheels.id && (this.id = Wheels.id)
    this.modelo_identico_de_neumáticos = Wheels.modelo_identico_de_neumáticos
    this.desgaste_del_neumático = Wheels.desgaste_del_neumático
    this.presión_adecuada_del_neumático = Wheels.presión_adecuada_del_neumático
    this.llanta_sin_daños = Wheels.llanta_sin_daños
    this.tuercas_de_seguridad = Wheels.tuercas_de_seguridad
    this.espesor_de_la_pastilla_de_freno =
      Wheels.espesor_de_la_pastilla_de_freno
    this.bielas = Wheels.bielas
    this.rótulas = Wheels.rótulas
    this.tipo_de_neumático_correcto = Wheels.tipo_de_neumático_correcto
    this.desgaste_homogeneo_de_neumáticos =
      Wheels.desgaste_homogeneo_de_neumáticos
    this.neumático_sin_daños = Wheels.neumático_sin_daños
    this.tornillos_y_llave_de_llanta = Wheels.tornillos_y_llave_de_llanta
    this.espesor_del_disco_de_freno = Wheels.espesor_del_disco_de_freno
    this.brazo_de_suspensión = Wheels.brazo_de_suspensión
    this.manguetas = Wheels.manguetas
    this.extremos_de_dirección = Wheels.extremos_de_dirección
  }
}
