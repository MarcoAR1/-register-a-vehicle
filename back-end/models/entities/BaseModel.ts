import pg = require('pg-promise/typescript/pg-subset')
import DATABASE, { PgType } from '../../db'
import { DatabaseError } from '../../errors/DatabaseError'
import { NotFoundError } from '../../errors/NotFoundError'

export abstract class BaseModel {
  public static DB = (): PgType => DATABASE.DB
  public static initModel: () => Promise<void>

  public static getQueryCreateTable = async (
    entrie: {
      [key: string]: string
    },
    tableName: string
  ): Promise<pg.IResult> => {
    let properties = ''
    const entries = Object.entries(entrie)
    for (const x in entries) {
      const [key, value] = entries[x]
      properties +=
        +x !== entries.length - 1 ? `${key} ${value},` : `${key} ${value}`
    }

    return DATABASE.DB.query(
      `CREATE TABLE IF NOT EXISTS ${tableName} ({{{properties}}});`.replace(
        '{{{properties}}}',
        properties
      )
    )
  }

  protected async save(
    data: unknown,
    tableName: string
    // eslint-disable-next-line
  ): Promise<any> {
    const res = (
      await DATABASE.DB.query(
        'INSERT INTO ${table:name}(${columns:name}) VALUES (${columns:csv}) RETURNING *',
        {
          table: tableName,
          columns: data,
        }
      )
    )[0]

    if (!res) throw new DatabaseError('it not posible save ' + tableName)
    return res
  }

  protected async findAll({
    limit = 50,
    offset = 0,
    tableName,
  }: {
    limit?: number
    offset?: number
    tableName: string
    // eslint-disable-next-line
  }): Promise<any> {
    return DATABASE.DB.query(
      'SELECT * FROM ${table:name} limit ${limit:csv} offset ${offset:csv}',
      {
        table: tableName,
        offset,
        limit,
      }
    )
  }

  // eslint-disable-next-line
  protected async findOne(where, tableName): Promise<any> {
    const res = (
      await DATABASE.DB.query(
        'SELECT * FROM ${table:name} WHERE ${where:name} = ${where:csv}',
        {
          table: tableName,
          where,
        }
      )
    )[0]
    if (!res)
      throw new NotFoundError('not found with provider ' + Object.keys(where))
    return res
  }

  protected async saveChange({
    data,
    id,
    tableName,
  }: {
    data
    id: number
    tableName: string
    // eslint-disable-next-line
  }): Promise<any> {
    const key = Object.keys(data)
    const value = Object.values(data)
    const Query = `UPDATE ${tableName} SET ${
      key.length === 1 ? '$2:name = $3:csv' : '($2:name) = ($3:csv)'
    } WHERE id = $1 RETURNING *`
    const res = (await DATABASE.DB.query(Query, [id, key, value]))[0]
    if (!res) throw new NotFoundError('not found with provider id')
    return res
  }
}
