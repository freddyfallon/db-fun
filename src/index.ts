import Koa from 'koa'
import Router from 'koa-router'

import { checkPostgresConnection } from './databases/postgres/connect'
import checkMongoConnection from './databases/mongodb/index'
import getRows from './databases/postgres/index'

const app = new Koa()
const router = new Router()

checkPostgresConnection()
checkMongoConnection()

getRows().then(console.log)

router.get('/', ctx => {
  ctx.body = 'Hello World!!!'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
