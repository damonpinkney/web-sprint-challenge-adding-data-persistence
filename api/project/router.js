const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.find()
    res.status(200).json(projects)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const project = await Project.add(req.body)
    res.status(201).json(project)
  } catch (err) {
    next(err)
  }
})

module.exports = router