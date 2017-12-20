// @flow

module.exports = async (knex: Function) =>
  (await knex('pg_catalog.pg_tables')
    .select('tablename')
    .where('schemaname', 'public')).map(t => t.tablename)
