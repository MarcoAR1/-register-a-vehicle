import { CarDTO } from '../dtos/CarDTO'
import { Pool, QueryResult } from 'pg'
import { BaseModel } from './BaseModel'

export class Car extends BaseModel {
  private DB: Pool
  public static tableName = 'cars'
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
    general: 'TEXT NOT NULL',
    DOCUMENTACION_Y_MANTENIMIENTO: 'TEXT NOT NULL',
    RUEDAS__FRENOS__SUSPENSION_Y_DIRECCION: 'TEXT NOT NULL',
    CARROCERIA: 'TEXT NOT NULL',
    MOTOR: 'TEXT NOT NULL',
    ALUMBRADO: 'TEXT NOT NULL',
    VOLANTE_Y_TABLERO: 'TEXT NOT NULL',
    INTERIOR_Y_ASIENTOS: 'TEXT NOT NULL',
    INTERIOR_GENERAL: 'TEXT NOT NULL',
  }

  constructor() {
    super()
    this.DB = BaseModel.DB()
  }

  public static async initModel(): Promise<void> {
    const Query = this.getQueryCreateTable(
      this.columnsProperties,
      this.tableName
    )
    await this.DB().query(Query)
  }

  public async create(data: CarDTO): Promise<QueryResult> {
    const Query = {
      text: `INSERT INTO cars ($1) VALUES ($2)`,
      values: [Object.keys(data), Object.values(data)],
    }
    return this.DB.query(Query)
  }

  public async getAll(): Promise<QueryResult> {
    return await this.DB.query(`SELECT * FROM cars`)
  }

  public async getById(id: number): Promise<QueryResult> {
    return await this.DB.query(`SELECT * FROM cars WHERE id = $1`, [id])
  }

  public async update(id: number, data: CarDTO): Promise<QueryResult> {
    const Query = {
      text: `UPDATE INTO cars SET $1 WHERE id = $2`,
      values: [data, id],
    }
    return await this.DB.query(Query)
  }
}
