import * as express from 'express'
import path = require('path')
import {
  BASE_URL_API,
  STATIC_PUBLIC_PATH,
  CARS,
} from '../constants/constants'
import { CarsRouter } from './CarsRouter'

export class Router {
  public static initializeRoutes(app: express.Express): void {
    app.use(BASE_URL_API + CARS, new CarsRouter().router)
    app.use(express.static(path.join(__dirname, STATIC_PUBLIC_PATH)))
  }
}
