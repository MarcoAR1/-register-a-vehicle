import { CarDTO } from '../dtos/CarDTO'
import { BaseModel } from './BaseModel'
import { PgType } from '../../db'
import { ICar } from '../interface/ICar'
import { CARS } from '../../constants/constants'
export class Car extends BaseModel {
  public DB: PgType
  public tableName: string
  public static tableName = CARS
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
    general: 'INTEGER NOT NULL',
    documentación_y_mantenimiento: 'INTEGER NOT NULL',
    ruedas__frenos__suspension_y_dirección: 'INTEGER NOT NULL',
    carrocería: 'INTEGER NOT NULL',
    motor: 'INTEGER NOT NULL',
    alumbrado: 'INTEGER NOT NULL',
    volante_y_tablero: 'INTEGER NOT NULL',
    interior_y_asientos: 'INTEGER NOT NULL',
    interior_general: 'INTEGER NOT NULL',
  }

  constructor() {
    super()
    this.DB = BaseModel.DB()
    this.tableName = Car.tableName
  }

  public static async initModel(): Promise<void> {
    await this.getQueryCreateTable(this.columnsProperties, this.tableName)
  }

  public async create(data: ICar): Promise<CarDTO> {
    const res = await this.save(data, this.tableName)
    return new CarDTO(res)
  }

  public async getAll(): Promise<CarDTO[]> {
    const res: ICar[] = await this.findAll({ tableName: this.tableName })
    return res.map((e) => new CarDTO(e))
  }

  public async getById(id: number): Promise<CarDTO> {
    const res = await this.findOne({ id }, this.tableName)
    return new CarDTO(res)
  }

  public async update(id: number, data: ICar): Promise<CarDTO> {
    const res = await this.saveChange({ id, data, tableName: this.tableName })
    return new CarDTO(res)
  }
}
