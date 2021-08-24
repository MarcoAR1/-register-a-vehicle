import { IMotor } from '../interface/IMotor'
export class MotorDTO {
  id?: number
  estado_aparente_del_motor: number
  estado_del_aceite: number
  nivel_del_liquido_de_frenos: number
  nivel_del_liquido_de_dirección_hidráulica: number
  cadena_o_correa_de_distribución: number
  ruidos_y_vibraciones_anómalas_0_motor_frio: number
  circuito_de_transmision: number
  circuito_de_frenos: number
  nivel_de_aceite: number
  nivel_y_estado_del_liquido_refrigerante: number
  estado_del_liquido_de_frenos: number
  nivel_del_liquido_de_limpia_parabrisas: number
  correa_de_elementos_axuliares___alternador_1_ventilador_1_aa___: number
  circuito_de_lubricación: number
  circuito_del_refrigerante: number
  circuito_del_combustible: number
  constructor(data: IMotor) {
    data.id && (this.id = data.id)
    this.estado_aparente_del_motor = data.estado_aparente_del_motor
    this.estado_del_aceite = data.estado_del_aceite
    this.nivel_del_liquido_de_frenos = data.nivel_del_liquido_de_frenos
    this.nivel_del_liquido_de_dirección_hidráulica =
      data.nivel_del_liquido_de_dirección_hidráulica
    this.cadena_o_correa_de_distribución = data.cadena_o_correa_de_distribución
    this.ruidos_y_vibraciones_anómalas_0_motor_frio =
      data.ruidos_y_vibraciones_anómalas_0_motor_frio
    this.circuito_de_transmision = data.circuito_de_transmision
    this.circuito_de_frenos = data.circuito_de_frenos
    this.nivel_de_aceite = data.nivel_de_aceite
    this.nivel_y_estado_del_liquido_refrigerante =
      data.nivel_y_estado_del_liquido_refrigerante
    this.estado_del_liquido_de_frenos = data.estado_del_liquido_de_frenos
    this.nivel_del_liquido_de_limpia_parabrisas =
      data.nivel_del_liquido_de_limpia_parabrisas
    this.correa_de_elementos_axuliares___alternador_1_ventilador_1_aa___ =
      data.correa_de_elementos_axuliares___alternador_1_ventilador_1_aa___
    this.circuito_de_lubricación = data.circuito_de_lubricación
    this.circuito_del_refrigerante = data.circuito_del_refrigerante
    this.circuito_del_combustible = data.circuito_del_combustible
  }
}
