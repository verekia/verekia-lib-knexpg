// @flow

import Knex from 'knex'
import pg from 'pg'

module.exports = (databaseUrl: string, migrationPath: string) => {
  if (!databaseUrl || !migrationPath) {
    throw Error('You need to pass a databaseUrl and a migrationPath to createKnex')
  }
  pg.defaults.ssl = true
  return Knex({
    client: 'pg',
    connection: databaseUrl,
    migrations: { directory: migrationPath },
    searchPath: ['knex', 'public'],
  })
}
