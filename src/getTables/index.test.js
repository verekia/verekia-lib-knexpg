import 'dotenv/config'

import getTables from './'
import createKnexAndDropAll from '../createKnexAndDropAll'
import dropAllAndDestroyKnex from '../dropAllAndDestroyKnex'

let knex

beforeEach(async () => {
  knex = await createKnexAndDropAll(process.env.TESTING_DATABASE_URL, 'unused')
})
afterEach(async () => {
  knex = dropAllAndDestroyKnex(knex)
})

test(null, async () => {
  expect(await getTables(knex)).toEqual([])
  await knex.schema.createTable('tablename', t => t.increments())
  expect(await getTables(knex)).toEqual(['tablename'])
})
