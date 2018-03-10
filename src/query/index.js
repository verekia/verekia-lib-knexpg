// @flow

module.exports = (knex: Function, tableName: string) => (userId?: string, trx?: Function) => {
  if (typeof tableName !== 'string') {
    throw Error('tableName must be a string')
  }
  const table = trx ? trx(tableName) : knex(tableName)
  return userId ? table.where({ userId }) : table
}
