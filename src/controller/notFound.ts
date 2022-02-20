
import type Koa from 'koa'
import { Response } from '../models/ResponseDto'
import { HttpStatusCode } from '@/enums/HttpStatusCode'

export const notFound = async(ctx: Koa.Context) => {
  const path = ctx.path
  ctx.status = HttpStatusCode.NOT_FOUND
  ctx.body = Response.error(HttpStatusCode.NOT_FOUND, `No matching route for ${path}`)
}
