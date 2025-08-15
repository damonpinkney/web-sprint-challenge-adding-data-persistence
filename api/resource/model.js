const db = require('../../data/dbConfig')

async function find() {
  const resources = await db('resources')
  return resources
}

async function findById(id) {
  const resource = await db('resources').where('resource_id', id).first()
  return resource
}

async function add(resource) {
  const [id] = await db('resources').insert(resource)
  return findById(id)
}

module.exports = { find, findById, add }