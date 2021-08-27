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
export default class DATABASE {
  public static DB = pg()(this.getCN())

  public static async initDatabase(): Promise<void> {
    if (NODE_ENV !== DEVELOPMENTMODE) {
      console.log(
        `Database ${DB_NAME} is not in development mode try create models`
      )
      await Models.initModels()
      console.log('all tables created')
    }
  }

  private static getCN(): string {
    return `postgres://${DB_USER}:${DB_PASSWORD}@${
      NODE_ENV === TEST ? DB_HOST_TEST : DB_HOST
    }:${DB_PORT ? +DB_PORT : 5432}/${
      NODE_ENV === TEST ? DB_NAME_TEST : DB_NAME
    }`
  }
}

export type PgType = typeof DATABASE.DB
