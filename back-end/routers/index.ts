import * as express from 'express'
import path = require('path')
import {
  BASE_URL_API,
  STATIC_PUBLIC_PATH,
  CARS,
  GENERALS,
} from '../constants/constants'
import { CarsRouter } from './CarsRouter'
import { GeneralsRouter } from './GeneralsRouter'

export class Router {
  public static initializeRoutes(app: express.Express): void {
    app.use(BASE_URL_API + CARS, new CarsRouter().router)
    app.use(BASE_URL_API + GENERALS, new GeneralsRouter().router)
    app.use(express.static(path.join(__dirname, STATIC_PUBLIC_PATH)))
  }
}
