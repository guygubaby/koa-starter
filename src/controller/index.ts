import type Koa from 'koa'
import { Response } from '@/models/ResponseDto'

export * from './notFound'

export const index = async(ctx: Koa.Context) => {
  ctx.body = Response.success('It works!')
}
