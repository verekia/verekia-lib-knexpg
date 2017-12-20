import pg from 'pg'

import createKnex from './'

test(null, () => {
  expect(pg.defaults.ssl).toBe(false)
  expect(() => createKnex()).toThrow()
  expect(() => createKnex('bla')).toThrow()
  createKnex('bla', 'bla')
  expect(pg.defaults.ssl).toBe(true)
})
