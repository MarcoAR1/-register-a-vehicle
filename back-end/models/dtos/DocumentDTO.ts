import { IDocument } from '../interface/IDocument'
export class DocumentDTO {
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

  constructor(document_y_mantenimiento: IDocument) {
    document_y_mantenimiento.id && (this.id = document_y_mantenimiento.id)
    this.modelo_identico_de_neumáticos =
      document_y_mantenimiento.modelo_identico_de_neumáticos
    this.desgaste_del_neumático =
      document_y_mantenimiento.desgaste_del_neumático
    this.presión_adecuada_del_neumático =
      document_y_mantenimiento.presión_adecuada_del_neumático
    this.llanta_sin_daños = document_y_mantenimiento.llanta_sin_daños
    this.tuercas_de_seguridad = document_y_mantenimiento.tuercas_de_seguridad
    this.espesor_de_la_pastilla_de_freno =
      document_y_mantenimiento.espesor_de_la_pastilla_de_freno
    this.bielas = document_y_mantenimiento.bielas
    this.rótulas = document_y_mantenimiento.rótulas
    this.tipo_de_neumático_correcto =
      document_y_mantenimiento.tipo_de_neumático_correcto
    this.desgaste_homogeneo_de_neumáticos =
      document_y_mantenimiento.desgaste_homogeneo_de_neumáticos
    this.neumático_sin_daños = document_y_mantenimiento.neumático_sin_daños
    this.tornillos_y_llave_de_llanta =
      document_y_mantenimiento.tornillos_y_llave_de_llanta
    this.espesor_del_disco_de_freno =
      document_y_mantenimiento.espesor_del_disco_de_freno
    this.brazo_de_suspensión = document_y_mantenimiento.brazo_de_suspensión
    this.manguetas = document_y_mantenimiento.manguetas
    this.extremos_de_dirección = document_y_mantenimiento.extremos_de_dirección
  }
}
