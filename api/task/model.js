const db = require('../../data/dbConfig')

async function find() {
  const tasks = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
  const tasksWithBoolean = tasks.map(t => ({
    ...t,
    task_completed: t.task_completed === 1 ? true : false
  }))
  return tasksWithBoolean
}

async function findById(id) {
  const task = await db('tasks').where('task_id', id).first()
  if (task) {
    return { ...task, task_completed: task.task_completed === 1 ? true : false }
  }
  return task
}

async function add(task) {
  const [id] = await db('tasks').insert(task)
  return findById(id)
}

module.exports = { find, findById, add }