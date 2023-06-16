import { buildApp } from "./fastify/app.js"
import  setTZ from 'set-tz';
import cache from "./helpers/cache.js";
import config from "./config/index.js";

setTZ(`America/Sao_Paulo`)

cache.flush()

const server = buildApp()

const start = async () => {
  try {
    await server.listen({ port:config.server.port })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()