import { DatabaseError as DBError } from './DatabaseError'
import { NotFoundError } from './NotFoundError'
import { InternalServerError } from './InternalServerError'
import * as express from 'express'
import { DatabaseError } from 'pg-protocol'

export const errorHandler: express.ErrorRequestHandler = (
  error: Error,
  req: express.Request,
  res: express.Response
) => {
  if (error instanceof DBError) {
    console.error(error)
    return res.status(500).json(error)
  }
  if (error instanceof DatabaseError) {
    console.error(error)
    return res.status(500).json(error)
  }
  if (error instanceof NotFoundError) {
    console.error(error)
    return res.status(404).json(error)
  }
  console.error(error.message)
  return res.status(500).json(new InternalServerError(error.message))
}
