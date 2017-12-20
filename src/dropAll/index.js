// @flow

module.exports = (knex: Function) => knex.raw('DROP SCHEMA public CASCADE; CREATE SCHEMA public;')
