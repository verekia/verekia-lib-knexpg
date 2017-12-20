// @flow

import dropAll from '../dropAll'

module.exports = async (knex: Function) => {
  await dropAll(knex)
  knex.destroy()
  return null
}
