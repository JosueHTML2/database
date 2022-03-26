const JsDB = require('./main')
const db = new JsDB.Collection();

db.set('Ola', [
   9
])

console.log(db.version('Ola'));