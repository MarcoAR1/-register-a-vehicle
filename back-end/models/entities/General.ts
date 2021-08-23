import { GeneralDTO } from '../dtos/GeneralDTO'
import { BaseModel } from './BaseModel'
import { PgType } from '../../db'
import { IGeneral } from '../interface/IGeneral'
import { NotFoundError } from '../../errors/NotFoundError'
import { DatabaseError } from '../../errors/DatabaseError'
import { GENERALS } from '../../constants/constants'
export class General extends BaseModel {
  public DB: PgType
  public static tableName = GENERALS
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
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
  }

  public static async initModel(): Promise<void> {
    await this.getQueryCreateTable(this.columnsProperties, this.tableName)
  }

  public async create(data: IGeneral): Promise<GeneralDTO> {
    const res = (
      await this.DB.query(
        'INSERT INTO Generals(${this:name}) VALUES (${this:csv}) RETURNING *',
        data
      )
    )[0]
    if (!res) throw new DatabaseError('it not posible save this General')
    return new GeneralDTO(res)
  }

  public async getAll(): Promise<GeneralDTO[]> {
    const res: IGeneral[] = await this.DB.query(`SELECT * FROM Generals`)
    return res.map((e) => new GeneralDTO(e))
  }

  public async getById(id: number): Promise<GeneralDTO> {
    const res = (
      await this.DB.query(`SELECT * FROM Generals WHERE id = $1`, [id])
    )[0]
    if (!res) throw new NotFoundError('Generald not found with provider id')
    return new GeneralDTO(res)
  }

  public async update(id: number, data: GeneralDTO): Promise<GeneralDTO> {
    const res = (
      await this.DB.query(
        `UPDATE Generals SET ($2:name) = ($2:csv) WHERE id = $1 RETURNING *`,
        [id, data]
      )
    )[0]
    if (!res) throw new NotFoundError('Generald not found with provider id')

    return new GeneralDTO(res)
  }
}
