import * as pg from 'pg'
import DATABASE from '../../db'
export abstract class BaseModel {
  public static DB = (): pg.Pool => DATABASE.DB
  public static initModel: () => Promise<void>
  public static getQueryCreateTable = (
    entrie: {
      [key: string]: string
    },
    tableName: string
  ): string => {
    let properties = ''
    const entries = Object.entries(entrie)
    for (const x in entries) {
      const [key, value] = entries[x]
      properties +=
        +x !== entries.length - 1 ? `${key} ${value},` : `${key} ${value}`
    }
    return `CREATE TABLE IF NOT EXISTS {{{tableName}}} ({{{properties}}});`
      .replace('{{{tableName}}}', tableName)
      .replace('{{{properties}}}', properties)
  }
}

