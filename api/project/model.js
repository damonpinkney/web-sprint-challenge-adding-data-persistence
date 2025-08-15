const db = require('../../data/dbConfig')

async function find() {
  const projects = await db('projects')
  const projectsWithBoolean = projects.map(p => ({
    ...p,
    project_completed: p.project_completed === 1 ? true : false
  }))
  return projectsWithBoolean
}

async function findById(id) {
  const project = await db('projects').where('project_id', id).first()
  if (project) {
    return { ...project, project_completed: project.project_completed === 1 ? true : false }
  }
  return project
}

async function add(project) {
  const [id] = await db('projects').insert(project)
  return findById(id)
}

module.exports = { find, findById, add }