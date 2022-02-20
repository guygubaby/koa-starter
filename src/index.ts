import Router from '@koa/router'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import routes from '@/routes'
import { BASE_ROOT_URL } from '@/config'

const app = new Koa()
const router = new Router()

app.use(bodyParser())
app.use(cors())

router.use(BASE_ROOT_URL, routes.routes(), routes.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is running at :3000')
})
