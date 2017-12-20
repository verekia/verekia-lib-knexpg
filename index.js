module.exports = {
  createKnex: require('./lib/createKnex'),
  createKnexAndDropAll: require('./lib/createKnexAndDropAll'),
  defineCols: require('./lib/defineCols'),
  dropAll: require('./lib/dropAll'),
  dropAllAndDestroyKnex: require('./lib/dropAllAndDestroyKnex'),
  getTables: require('./lib/getTables'),
  upsertOne: require('./lib/upsertOne'),
}
