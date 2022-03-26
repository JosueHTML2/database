function JsDB() {
   return new (require("./src/DataBase"));
}
JsDB.DataBase = (require("./src/DataBase"));
JsDB.Collection = (require("./src/Collection"));


module.exports = JsDB;