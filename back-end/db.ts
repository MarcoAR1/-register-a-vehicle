import { TEST } from './constants/constants'
import { Pool } from 'pg'
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
  public static DB: Pool = new Pool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: NODE_ENV === TEST ? DB_HOST_TEST : DB_HOST,
    port: DB_PORT ? +DB_PORT : 5432,
    database: NODE_ENV === TEST ? DB_NAME_TEST : DB_NAME,
  })

  public static async initDatabase(): Promise<void> {
    Models.initModels()
  }
}

