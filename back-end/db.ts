import { TEST } from './constants/constants'
import { Pool } from 'pg'
import {
  DB_HOST,
  DB_HOST_TEST,
  NODE_ENV,
  DB_USER,
  DB_PASSWORD,
  DATABASE_TEST,
  DB_PORT,
  DATABASE,
} from './utils/config'
console.log(
  DB_HOST,
  DB_HOST_TEST,
  NODE_ENV,
  DB_USER,
  DB_PASSWORD,
  DATABASE_TEST,
  DB_PORT,
  DATABASE
)
export default new Pool({
  host: NODE_ENV === TEST ? DB_HOST_TEST : DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: NODE_ENV === TEST ? DATABASE_TEST : DATABASE,
  port: DB_PORT ? +DB_PORT : 5432,
})
