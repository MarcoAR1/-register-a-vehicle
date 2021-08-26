import { CarDTO } from '../dtos/CarDTO'
import { BaseModel } from './BaseModel'
import { PgType } from '../../db'
import { ICar } from '../interface/ICar'
import { CARS } from '../../constants/constants'
export default class Car extends BaseModel {
  public DB: PgType
  public tableName: string
  public static tableName = CARS
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
    propietario: 'VARCHAR(50) NOT NULL',
    email: 'VARCHAR(255) NOT NULL',
    km: 'VARCHAR(255) NOT NULL',
    precio: 'VARCHAR(255) NOT NULL',
    image: 'TEXT NOT NULL',
    marca: 'VARCHAR(50) NOT NULL',
    modelo: 'VARCHAR(50) NOT NULL',
    generación: 'VARCHAR(50) NOT NULL',
    motor: 'VARCHAR(50) NOT NULL',
    tipo_de_carrocería: 'VARCHAR(50) NOT NULL',
    numero_de_puertas: 'VARCHAR(50) NOT NULL',
    numero_de_plazas: 'VARCHAR(50) NOT NULL',
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

  public async getByCar_id(car_id: number): Promise<CarDTO> {
    const res = await this.findOne({ car_id }, this.tableName)
    return new CarDTO(res)
  }
}
export const columnsProperties = Car.columnsProperties
