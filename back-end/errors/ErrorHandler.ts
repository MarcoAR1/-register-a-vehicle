import { DatabaseError } from './DatabaseError'
import { NotFoundError } from './NotFoundError'
import { InternalServerError } from './InternalServerError'
import * as express from 'express'

export const errorHandler = (
  error: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction // eslint-disable-line
): express.Response => {
  console.error(error.message)
  if (error instanceof DatabaseError) {
    return res.status(error.code).json(error)
  }
  if (error instanceof NotFoundError) {
    return res.status(error.code).json(error)
  }
  if (error.message.startsWith('null value in column')) {
    const err = new DatabaseError(error.message, 400)
    return res.status(400).json(err)
  }
  return res.status(500).json(new InternalServerError(error.message))
}
