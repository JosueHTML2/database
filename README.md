A local database, using **FileSystem** & **Json**.

**Getting started**

  ```js
   const JsDB = require('@josue7/database')
   const db = JsDB();
   // Or
   const JsDB = require('@josue7/database')
   const db = new JsDB.DataBase();
  ```
# Methods

  ### `setOne: void`  <br>
  ### `findOne: void`  <br>
  ### `fetch: Promise<any>` <br>
  ### `has: boolean`  <br>
  ### `clear: void` <br>
  ### `remove: void` <br>
  ### `toJSON: Promise<any>` <br>
  ### `shift: void` <br>
  ### `filter: any` <br>

# Realases
  version **1.0.0** Intruducing <br>
  version **1.0.1** Adding some new methods <br>
  version **1.0.2** Fixing bugs <br>
  version **1.0.3** Fixing three bugs <br>
  version **1.0.4** Adding shift method <br>
  version **1.0.5** Adding filter and findAndUpdateOne method <br>
  version **1.1.0** Bugs fixed 🧑🏻 <br>
  version **1.1.1** Updating `readme` file and bringing Collection <br>

    
# Examples

  **Setting something**

  ```js
   db.set('name', 'josue');
  ```

  **Finding something**

  ```js
   const find = db.find('name').name;

   console.log(find); // 'josue'
  ```
 **Findind and updating**

  ```js
   const find = db.findAndUpdateOne('name', {
      $new: (old) => old += ' figueiredo'
   }).name;

   console.log(find); // 'josue figueiredo'
  ```

