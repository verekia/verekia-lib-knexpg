import 'dotenv/config'

import dropAll from './'
import getTables from '../getTables'
import createKnexAndDropAll from '../createKnexAndDropAll'
import dropAllAndDestroyKnex from '../dropAllAndDestroyKnex'

let knex

beforeEach(async () => {
  knex = await createKnexAndDropAll(process.env.TESTING_DATABASE_URL, 'unused')
})
afterEach(async () => {
  knex = await dropAllAndDestroyKnex(knex)
})

test(null, async () => {
  expect(await getTables(knex)).toEqual([])
  await knex.schema.createTable('tablename', t => t.increments())
  expect(await getTables(knex)).toEqual(['tablename'])
  await dropAll(knex)
  expect(await getTables(knex)).toEqual([])
})
