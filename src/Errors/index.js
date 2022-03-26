exports.error = (code, key) => {
   if (code === "key") {
      throw new Error('The key is not valid')
   } else if (code === "empty") {
      throw new Error('Make sure the key is not empty');
   } else if (code === "key2") {
      throw new Error('There is not your key in DataBase', [key]);
   };
}