import { DEVELOPMENTMODE, TEST } from './constants/constants'
import * as pg from 'pg-promise'
import {
  DB_HOST,
  DB_HOST_TEST,
  NODE_ENV,
  DB_USER,
  DB_PASSWORD,
  DB_NAME_TEST,
  DB_PORT,
  DB_NAME,
} from './utils/config'
import Models from './models/index'
import { IClient } from 'pg-promise/typescript/pg-subset'
class DATABASE {
  public static DB = pg()(this.getCN())
  public DB: PgType

  public async initDatabase(): Promise<void> {
    const res = await DATABASE.DB.connect()
    console.log('database connected')
    this.DB = res
    if (NODE_ENV !== DEVELOPMENTMODE) {
      console.log(
        `Database ${DB_NAME} is not in development mode try create models`
      )
      await Models.initModels()
      console.log('all tables created')
    }
  }

  private static getCN(): string {
    return `postgres://${DB_USER}:${decodeURIComponent(`${DB_PASSWORD}`)}@${
      NODE_ENV === TEST ? DB_HOST_TEST : DB_HOST
    }:${DB_PORT ? +DB_PORT : 5432}/${
      NODE_ENV === TEST ? DB_NAME_TEST : DB_NAME
    }`
  }
}
export default new DATABASE()
export type PgType = pg.IConnected<Record<string, unknown>, IClient>
