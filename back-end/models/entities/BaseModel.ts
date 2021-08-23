import pg = require('pg-promise/typescript/pg-subset')
import DATABASE, { PgType } from '../../db'

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
}