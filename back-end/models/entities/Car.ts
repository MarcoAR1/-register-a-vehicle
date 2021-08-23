import { CarDTO } from '../dtos/CarDTO'
import { BaseModel } from './BaseModel'
import { PgType } from '../../db'
import { ICar } from '../interface/ICar'
import { NotFoundError } from '../../errors/NotFoundError'
import { DatabaseError } from '../../errors/DatabaseError'
import { CARS } from '../../constants/constants'
export class Car extends BaseModel {
  public DB: PgType
  public static tableName = CARS
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
    general: 'INTEGER NOT NULL',
    documentacion_y_mantenimiento: 'INTEGER NOT NULL',
    ruedas__frenos__suspension_y_direccion: 'INTEGER NOT NULL',
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
  }

  public static async initModel(): Promise<void> {
    await this.getQueryCreateTable(this.columnsProperties, this.tableName)
  }

  public async create(data: ICar): Promise<CarDTO> {
    const res = (
      await this.DB.query(
        'INSERT INTO cars(${this:name}) VALUES (${this:csv}) RETURNING *',
        data
      )
    )[0]
    if (!res) throw new DatabaseError('it not posible save this car')
    return new CarDTO(res)
  }

  public async getAll(): Promise<CarDTO[]> {
    const res: ICar[] = await this.DB.query(`SELECT * FROM cars`)
    return res.map((e) => new CarDTO(e))
  }

  public async getById(id: number): Promise<CarDTO> {
    const res = (
      await this.DB.query(`SELECT * FROM cars WHERE id = $1`, [id])
    )[0]
    if (!res) throw new NotFoundError('card not found with provider id')
    return new CarDTO(res)
  }

  public async update(id: number, data: CarDTO): Promise<CarDTO> {
    const key = Object.keys(data)
    const value = Object.values(data)
    const Query = `UPDATE cars SET ${
      key.length === 1 ? '$2:name = $3:csv' : '($2:name) = ($3:csv)'
    } WHERE id = $1 RETURNING *`

    const res = (await this.DB.query(Query, [id, key, value]))[0]
    if (!res) throw new NotFoundError('card not found with provider id')

    return new CarDTO(res)
  }
}
