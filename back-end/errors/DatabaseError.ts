import { BaseError } from './BaseError'

export class DatabaseError extends BaseError {
  constructor(errorString: string, errorCode = 500) {
    super(errorString, errorCode, DatabaseError.name)
  }
}
