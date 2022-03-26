const { __set } = require('./Utils/coll');

module.exports = class Collection extends Set {
   constructor() {
      super();
   }
   set(...data) {
      this.add(data);

      return this;
   }
}