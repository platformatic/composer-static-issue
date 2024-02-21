/// <reference path="../global.d.ts" />
'use strict'
const { join } = require('node:path')
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.decorate('example', 'foobar')

  fastify.register(require('@fastify/static'), {
    root: join(__dirname, '..', 'dist')
  })

  fastify.get('/app', async (req, res) => {
    return res.sendFile('index.html')
  })
}
