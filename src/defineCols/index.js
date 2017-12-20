// @flow

import keyBy from 'lodash.keyby'

module.exports = (colNames: Array<string>, options?: Object) => {
  let newColNames = [...colNames]

  colNames.forEach(colName => {
    if (['id', 'created_at', 'createdAt', 'updated_at', 'updatedAt'].includes(colName)) {
      throw new Error(
        'You cannot use the column names `id`, `created_at`, `createdAt`, `updated_at`, or `updatedAt`',
      )
    }
  })

  if (!options || (options && options.id !== false)) {
    newColNames.push('id')
  }

  if (!options || (options && options.timestamps !== false)) {
    if (options && options.camelCaseTimestamps === true) {
      newColNames = newColNames.concat(['createdAt', 'updatedAt'])
    } else {
      newColNames = newColNames.concat(['created_at', 'updated_at'])
    }
  }

  return keyBy(newColNames)
}
