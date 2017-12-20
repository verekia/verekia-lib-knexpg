import 'dotenv/config'

import dropAllAndDestroyKnex from './'
import createKnexAndDropAll from '../createKnexAndDropAll'
import getTables from '../getTables'

let knex

beforeEach(async () => {
  knex = await createKnexAndDropAll(process.env.TESTING_DATABASE_URL, 'unused')
})
afterEach(async () => {
  knex.destroy()
  knex = null
})

test(
  null,
  async () => {
    expect(await getTables(knex)).toEqual([])
    await knex.schema.createTable('tablename', t => t.increments())
    expect(await getTables(knex)).toEqual(['tablename'])
    expect(await dropAllAndDestroyKnex(knex)).toBe(null)
    knex = await createKnexAndDropAll(process.env.TESTING_DATABASE_URL, 'unused')
    expect(await getTables(knex)).toEqual([])
  },
  15000,
)
