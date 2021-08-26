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
    estado_aparente_del_motor: 'INTEGER DEFAULT 0',
    estado_del_aceite: 'INTEGER DEFAULT 0',
    nivel_del_liquido_de_frenos: 'INTEGER DEFAULT 0',
    nivel_del_liquido_de_dirección_hidráulica: 'INTEGER DEFAULT 0',
    cadena_o_correa_de_distribución: 'INTEGER DEFAULT 0',
    ruidos_y_vibraciones_anómalas_0_motor_frio: 'INTEGER DEFAULT 0',
    circuito_de_transmision: 'INTEGER DEFAULT 0',
    circuito_de_frenos: 'INTEGER DEFAULT 0',
    nivel_de_aceite: 'INTEGER DEFAULT 0',
    nivel_y_estado_del_liquido_refrigerante: 'INTEGER DEFAULT 0',
    estado_del_liquido_de_frenos: 'INTEGER DEFAULT 0',
    nivel_del_liquido_de_limpia_parabrisas: 'INTEGER DEFAULT 0',
    correa_de_elementos_axuliares___alternador_1_ventilador_1_aa___:
      'INTEGER DEFAULT 0',
    circuito_de_lubricación: 'INTEGER DEFAULT 0',
    circuito_del_refrigerante: 'INTEGER DEFAULT 0',
    circuito_del_combustible: 'INTEGER DEFAULT 0',
    car_id: 'INTEGER REFERENCES car(id) ON DELETE CASCADE UNIQUE',
  }

  constructor() {
    super()
    this.DB = BaseModel.DB()
    this.tableName = Motor.tableName
  }

  public static async initModel(): Promise<void> {
    await this.getQueryCreateTable(this.columnsProperties, this.tableName)
  }

  public async create(data: MotorDTO): Promise<MotorDTO> {
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

  public async update(id: number, data: MotorDTO): Promise<MotorDTO> {
    const res = await this.saveChange({ id, data, tableName: this.tableName })
    return new MotorDTO(res)
  }

  public async getByCar_id(car_id: number): Promise<MotorDTO> {
    const res = await this.findOne({ car_id }, this.tableName)
    return new MotorDTO(res)
  }
}
export const columnsProperties = Motor.columnsProperties
