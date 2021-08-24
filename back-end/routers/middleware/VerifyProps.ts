import * as express from 'express'
import { MissingPropsInRequest } from '../../errors/MissingPropsInRequest'

export abstract class VerifyProps {
  public static checkProps(paramskey: string[]): middleware {
    return (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ): void => {
      if (!paramskey) throw new MissingPropsInRequest('need props', 500)
      for (const param of paramskey) {
        if (param === 'id') continue
        if (!req.body[param])
          throw new MissingPropsInRequest('missing props in your request')
      }
      next()
    }
  }

  public static checkIdIsANumber(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void {
    const { id } = req.params
    if (isNaN(+id)) throw new MissingPropsInRequest('El id debe ser un numero')
    next()
  }
}

export type middleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => void
