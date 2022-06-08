/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    /** Success */
    resBody: Types.EventDocument[]
  }

  post: {
    status: 201
    /** Created */
    resBody: Types.EventDocument[]
    reqBody: Types.CreateEventDocumentsBody
  }

  put: {
    status: 200
    /** Replaced */
    resBody: Types.EventDocument[]
    reqBody: Types.CreateEventDocumentsBody
  }
}
