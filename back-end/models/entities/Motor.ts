import { MotorDTO } from '../dtos/MotorDTO'
import { BaseModel } from './BaseModel'
import { PgType } from '../../db'
import { IMotor } from '../interface/IMotor'
import { MOTOR } from '../../constants/constants'

export default class Motor extends BaseModel {
  public DB: PgType
  public tableName: string
  public static tableName = MOTOR
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
    estado_aparente_del_motor: 'INTEGER NOT NULL',
    estado_del_aceite: 'INTEGER NOT NULL',
    nivel_del_liquido_de_frenos: 'INTEGER NOT NULL',
    nivel_del_liquido_de_dirección_hidráulica: 'INTEGER NOT NULL',
    cadena_o_correa_de_distribución: 'INTEGER NOT NULL',
    ruidos_y_vibraciones_anómalas_0_motor_frio: 'INTEGER NOT NULL',
    circuito_de_transmision: 'INTEGER NOT NULL',
    circuito_de_frenos: 'INTEGER NOT NULL',
    nivel_de_aceite: 'INTEGER NOT NULL',
    nivel_y_estado_del_liquido_refrigerante: 'INTEGER NOT NULL',
    estado_del_liquido_de_frenos: 'INTEGER NOT NULL',
    nivel_del_liquido_de_limpia_parabrisas: 'INTEGER NOT NULL',
    correa_de_elementos_axuliares___alternador_1_ventilador_1_aa___:
      'INTEGER NOT NULL',
    circuito_de_lubricación: 'INTEGER NOT NULL',
    circuito_del_refrigerante: 'INTEGER NOT NULL',
    circuito_del_combustible: 'INTEGER NOT NULL',
  }

  constructor() {
    super()
    this.DB = BaseModel.DB()
    this.tableName = Motor.tableName
  }

  public static async initModel(): Promise<void> {
    await this.getQueryCreateTable(this.columnsProperties, this.tableName)
  }

  public async create(data: IMotor): Promise<MotorDTO> {
    const res = await this.save(data, this.tableName)
    return new MotorDTO(res)
  }

  public async getAll(): Promise<MotorDTO[]> {
    const res: IMotor[] = await this.findAll({
      tableName: this.tableName,
    })
    return res.map((e) => new MotorDTO(e))
  }

  public async getById(id: number): Promise<MotorDTO> {
    const res = await this.findOne({ id }, this.tableName)
    return new MotorDTO(res)
  }

  public async update(id: number, data: IMotor): Promise<MotorDTO> {
    const res = await this.saveChange({ id, data, tableName: this.tableName })
    return new MotorDTO(res)
  }
}
export const columnsProperties = Motor.columnsProperties
