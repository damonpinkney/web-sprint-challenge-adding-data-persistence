const knex = require('knex');

const config = {
  client: 'sqlite3',
  connection: {
    filename: process.env.NODE_ENV === 'test' 
      ? './data/test.db3' 
      : './data/database.db3',
  },
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    }
  }
};

const db = knex(config);

module.exports = db;