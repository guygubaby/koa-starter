import Router from '@koa/router'
import { index, notFound } from '@/controller'

const routes = new Router()

routes.all('/', index)

routes.all('(.*)', notFound)

export default routes
