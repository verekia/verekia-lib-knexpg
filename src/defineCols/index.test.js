import defineCols from './'

test(null, () => {
  expect(defineCols([], { id: false, timestamps: false })).toEqual({})
  expect(defineCols([], { timestamps: false })).toEqual({ id: 'id' })
  expect(defineCols([], { id: false })).toEqual({ created_at: 'created_at', updated_at: 'updated_at' })
  expect(defineCols([], { id: false, camelCaseTimestamps: true })).toEqual({
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  })
  expect(defineCols([])).toEqual({ id: 'id', created_at: 'created_at', updated_at: 'updated_at' })

  expect(defineCols(['bla'])).toEqual({
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    bla: 'bla',
  })

  expect(defineCols(['bla', 'blo'], { camelCaseTimestamps: true })).toEqual({
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    bla: 'bla',
    blo: 'blo',
  })
  expect(() => defineCols(['foo', 'id'])).toThrow()
  expect(() => defineCols(['foo', 'created_at'])).toThrow()
  expect(() => defineCols(['foo', 'createdAt'])).toThrow()
  expect(() => defineCols(['foo', 'updated_at'])).toThrow()
  expect(() => defineCols(['foo', 'updatedAt'])).toThrow()
})
