require('express-async-errors')
require('dotenv').config()
import * as express from 'express'
import * as http from 'http'
import * as cors from 'cors'
import * as morgan from 'morgan'
import path = require('path')
import { PORT, NODE_ENV } from './utils/config'
import { DEVELOPMENTMODE } from './constants/constants'

export class Server {
  public static app: express.Express

  public static async init(): Promise<http.Server> {
    Server.app = express()
    Server.app.use(express.json())
    Server.configureApp()
    Server.app.use(express.static(path.join(__dirname, './dist')))

    return Server.app.listen(Server.app.get('port'))
  }

  public static configureApp(): void {
    Server.app.set('port', PORT || 3001)
    Server.app.use(express.json())
    Server.app.use(cors())
    if (NODE_ENV === DEVELOPMENTMODE) {
      Server.app.use(
        morgan(
          ':method :url :status :res[content-length] - :response-time ms :json'
        )
      )
      morgan.token('json', (req: express.Request) => {
        return JSON.stringify(req.body)
      })
    }
  }
}
