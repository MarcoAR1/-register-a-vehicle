import { BodyworkDTO } from '../dtos/BodyworkDTO'
import { BaseModel } from './BaseModel'
import { PgType } from '../../db'
import { IBodywork } from '../interface/IBodywork'
import { BODYWORK } from '../../constants/constants'

export default class Bodywork extends BaseModel {
  public DB: PgType
  public tableName: string
  public static tableName = BODYWORK
  public static columnsProperties: { [key: string]: string } = {
    id: 'SERIAL NOT NULL PRIMARY KEY',
    bajos_del_paragolpe_delantero: 'INTEGER DEFAULT 0',
    capó: 'INTEGER DEFAULT 0',
    guardabarro_delantero_derecho: 'INTEGER DEFAULT 0',
    espejo_retrovisor_izquierdo: 'INTEGER DEFAULT 0',
    panel_exterior___puerta_delantera_izquierda___: 'INTEGER DEFAULT 0',
    bisagra___puerta_delantera_izquierda___: 'INTEGER DEFAULT 0',
    manija_exterior___puerta_delantera_derecha___: 'INTEGER DEFAULT 0',
    parabrisas_delantero: 'INTEGER DEFAULT 0',
    paragolpe_delantero: 'INTEGER DEFAULT 0',
    guardabarro_delantero_izquierdo: 'INTEGER DEFAULT 0',
    parabrisas: 'INTEGER DEFAULT 0',
    espejo_retrovisor_derecho: 'INTEGER DEFAULT 0',
    manija___puerta_delantera_izquierda___: 'INTEGER DEFAULT 0',
    panel_exterior___puerta_delantera_derecha___: 'INTEGER DEFAULT 0',
    bisagra___puerta_delantera_derecha___: 'INTEGER DEFAULT 0',
    talonera_izquierda: 'INTEGER DEFAULT 0',
    car_id: 'INTEGER REFERENCES car(id) ON DELETE CASCADE UNIQUE',
  }

  constructor() {
    super()
    this.DB = BaseModel.DB()
    this.tableName = Bodywork.tableName
  }

  public static async initModel(): Promise<void> {
    await this.getQueryCreateTable(this.columnsProperties, this.tableName)
  }

  public async create(data: BodyworkDTO): Promise<BodyworkDTO> {
    const res = await this.save(data, this.tableName)
    return new BodyworkDTO(res)
  }

  public async getAll(): Promise<BodyworkDTO[]> {
    const res: IBodywork[] = await this.findAll({
      tableName: this.tableName,
    })
    return res.map((e) => new BodyworkDTO(e))
  }

  public async getById(id: number): Promise<BodyworkDTO> {
    const res = await this.findOne({ id }, this.tableName)
    return new BodyworkDTO(res)
  }

  public async update(id: number, data: BodyworkDTO): Promise<BodyworkDTO> {
    const res = await this.saveChange({ id, data, tableName: this.tableName })
    return new BodyworkDTO(res)
  }

  public async getByCar_id(car_id: number): Promise<BodyworkDTO> {
    const res = await this.findOne({ car_id }, this.tableName)
    return new BodyworkDTO(res)
  }
}
export const columnsProperties = Bodywork.columnsProperties
