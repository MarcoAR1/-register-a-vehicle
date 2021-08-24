import * as express from 'express'
import path = require('path')
import {
  BASE_URL_API,
  STATIC_PUBLIC_PATH,
  CARS,
  DOCUMENTACIÓN_Y_MANTENIMIENTOS,
  WHEELS,
  BODYWORK,
  MOTOR,
  INSIDE,
} from '../constants/constants'
import { BodyworksRouter } from './BodyworksRouter'
import { CarsRouter } from './CarsRouter'
import { DocumentsRouter } from './DocumentsRouter'
import { InsidesRouter } from './InsideRouter'
import { MotorsRouter } from './MotorsRouter'
import { WheelsRouter } from './WheelsRouter'

export class Router {
  public static initializeRoutes(app: express.Express): void {
    app.use(BASE_URL_API + CARS, new CarsRouter().router)
    app.use(
      BASE_URL_API + DOCUMENTACIÓN_Y_MANTENIMIENTOS,
      new DocumentsRouter().router
    )
    app.use(BASE_URL_API + WHEELS, new WheelsRouter().router)
    app.use(BASE_URL_API + BODYWORK, new BodyworksRouter().router)
    app.use(BASE_URL_API + MOTOR, new MotorsRouter().router)
    app.use(BASE_URL_API + INSIDE, new InsidesRouter().router)
    app.use(express.static(path.join(__dirname, STATIC_PUBLIC_PATH)))
  }
}
