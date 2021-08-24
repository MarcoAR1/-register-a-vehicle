import { BaseError } from './BaseError'

export class MissingPropsInRequest extends BaseError {
  constructor(errorString: string, errorCode = 400) {
    super(errorString, errorCode, MissingPropsInRequest.name)
  }
}
