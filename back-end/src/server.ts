import path = require('path')
require('express-async-errors')
import * as express from 'express'
import * as http from 'http'
import * as cors from 'cors'
import * as morgan from 'morgan'
import { PORT, NODE_ENV } from './utils/config'
import { DEVELOPMENTMODE, STATIC_PUBLIC_PATH } from './constants/constants'
import DATABASE from './db'
import { Router } from './routers'
import { errorHandler } from './errors/ErrorHandler'
export class Server {
  public static app: express.Express

  public static async init(): Promise<http.Server> {
    Server.app = express()
    Server.app.use(express.json())
    Server.configureApp()
    Router.initializeRoutes(Server.app)
    Server.app.use(express.static(path.join(__dirname, STATIC_PUBLIC_PATH)))
    Server.app.use(errorHandler)
    await DATABASE.initDatabase()
    return Server.app.listen(Server.app.get('port'), () =>
      console.log(
        'Server is running at %d in %s mode',
        Server.app.get('port'),
        Server.app.get('env')
      )
    )
  }

  public static configureApp(): void {
    Server.app.set('port', PORT || 3001)
    Server.app.use(express.json())
    Server.app.use(cors())
    Server.app.use(
      morgan(
        `:method :url :status :res[content-length] - :response-time ms ${
          NODE_ENV === DEVELOPMENTMODE && ':json'
        }`
      )
    )
    if (NODE_ENV === DEVELOPMENTMODE) {
      morgan.token('json', (req: express.Request) => {
        return JSON.stringify(req.body)
      })
    }
  }
}
