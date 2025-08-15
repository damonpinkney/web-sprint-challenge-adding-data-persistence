const router = require('express').Router()
const Task = require('./model')

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.find()
    res.status(200).json(tasks)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const task = await Task.add(req.body)
    res.status(201).json(task)
  } catch (err) {
    next(err)
  }
})

module.exports = router