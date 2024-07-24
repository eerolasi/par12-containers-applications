const express = require('express')
const { getAsync } = require('../redis')
const router = express.Router()

router.get('/', async (_, res) => {
  const addedTodos = parseInt(await getAsync('added_todos')) || 0
  res.send({ addedTodos })
})

module.exports = router
