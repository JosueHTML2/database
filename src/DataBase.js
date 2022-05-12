const { writeFileSync, readFileSync } = require('fs');
const { join } = require('path');
const { add, find, shift, subtract, filter, findAndUpdateOne } = require('./Utils/data');
class DataBase {
   version = (require('../package.json')).version
   set(key, value) {
      add(key, value);
   }
   find(key) {
      return find(key, 'find');
   }
   fetch() {
      return Promise.resolve(
         readFileSync(__dirname + '/database.json') !== ""
            ? JSON.parse(
               readFileSync(__dirname + '/database.json', 'utf-8')
            ) : []);
   }
   has(key) {
      let data = this.find(key);
      return (data) !== undefined;
   }
   shift() {
      shift()
   }
   filter(callback) {
      return filter(callback);
   }
   remove(key) {
      subtract(key)
   }
  update(key, args) {
      return findAndUpdateOne(key, args)
   }
   clear() {
      writeFileSync(join(____dirname, "database.json"), 'utf-8');
   }
   toJSON() {
      return readFileSync(__dirname + '/database.json') !== ""
         ? JSON.parse(
            readFileSync(__dirname + '/database.json', 'utf-8')
         ) : []
   }
}
module.exports = DataBase;
