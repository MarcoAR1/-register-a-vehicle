import * as express from 'express'
import path = require('path')
import {
  BASE_URL_API,
  STATIC_PUBLIC_PATH,
  CARS,
  GENERALS,
  DOCUMENTACIÓN_Y_MANTENIMIENTOS,
  WHEELS,
} from '../constants/constants'
import { CarsRouter } from './CarsRouter'
import { DocumentsRouter } from './DocumentsRouter'
import { GeneralsRouter } from './GeneralsRouter'
import { WheelsRouter } from './WheelsRouter'

export class Router {
  public static initializeRoutes(app: express.Express): void {
    app.use(BASE_URL_API + CARS, new CarsRouter().router)
    app.use(BASE_URL_API + GENERALS, new GeneralsRouter().router)
    app.use(
      BASE_URL_API + DOCUMENTACIÓN_Y_MANTENIMIENTOS,
      new DocumentsRouter().router
    )
    app.use(BASE_URL_API + WHEELS, new WheelsRouter().router)
    app.use(express.static(path.join(__dirname, STATIC_PUBLIC_PATH)))
  }
}
