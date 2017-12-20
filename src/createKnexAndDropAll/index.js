// @flow

import createKnex from '../createKnex'
import dropAll from '../dropAll'

module.exports = async (databaseUrl: string, migrationPath: string) => {
  const knex = createKnex(databaseUrl, migrationPath)
  await dropAll(knex)
  return knex
}
