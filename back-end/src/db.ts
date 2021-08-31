import { DEVELOPMENTMODE } from './constants/constants'
import * as pg from 'pg-promise'
import { NODE_ENV } from './utils/config'
import Models from './models/index'
export default class DATABASE {
  public static DB = pg()(`${process.env.DATABASE_URL}?ssl=true`)

  public static async initDatabase(): Promise<void> {
    if (NODE_ENV !== DEVELOPMENTMODE) {
      console.log(`${NODE_ENV} mode try create models`)
      await Models.initModels()
      console.log('all tables created')
    }
  }
}

export type PgType = typeof DATABASE.DB
