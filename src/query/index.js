// @flow

module.exports = (knex: Function, tableName: string) => (userId?: mixed, trx?: Function) => {
  if (typeof tableName !== 'string') {
    throw Error('tableName must be a string')
  }
  const table = trx ? trx(tableName) : knex(tableName)
  return userId ? table.where(`${tableName}.userId`, userId) : table
}
