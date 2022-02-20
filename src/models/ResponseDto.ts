import { HttpStatusCode } from '../enums/HttpStatusCode'

class ResponseDto {
  constructor(obj?: ResponseDto) {
    if (obj)
      Object.assign(this, obj)
  }

  /**
   * 响应状态码
   *
   * @type {number}
   */
  statusCode?: number
  /**
   * 消息说明
   *
   * @type {string}
   */
  message?: string
  /**
   * 状态码>=400时的http status
   *
   * @type {string}
   */
  error?: string
  /**
   * 返回的数据
   *
   * @type {any}
   */
  data?: any
}

export class Response {
  static success<T = any>(data?: T): ResponseDto {
    return new ResponseDto({
      statusCode: HttpStatusCode.OK,
      data,
    })
  }

  static error(code: HttpStatusCode, message = 'server error'): ResponseDto {
    return new ResponseDto({
      statusCode: code,
      message,
    })
  }
}
