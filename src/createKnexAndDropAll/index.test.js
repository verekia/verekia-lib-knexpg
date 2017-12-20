import 'dotenv/config'

import createKnexAndDropAll from './'
import dropAllAndDestroyKnex from '../dropAllAndDestroyKnex'
import getTables from '../getTables'

let knex

afterEach(async () => {
  knex = await dropAllAndDestroyKnex(knex)
})

test(
  null,
  async () => {
    knex = await createKnexAndDropAll(process.env.TESTING_DATABASE_URL, 'unused')
    expect(await getTables(knex)).toEqual([])
    await knex.schema.createTable('tablename', t => t.increments())
    expect(await getTables(knex)).toEqual(['tablename'])
    knex.destroy()
    knex = await createKnexAndDropAll(process.env.TESTING_DATABASE_URL, 'unused')
    expect(await getTables(knex)).toEqual([])
  },
  15000,
)
