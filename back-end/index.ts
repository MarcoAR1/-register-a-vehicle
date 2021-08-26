const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })
import { Server } from './server'
Server.init()
