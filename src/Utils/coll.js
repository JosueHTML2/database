const { __error } = require("../Errors");
const { writeFileSync, readFileSync } = require('fs');

let path = __dirname.replace('\\Utils', '\\collection.json')

exports.__set = (data) => {
   console.log((data));
   const stringifiedData = (`
         [
            ${JSON.stringify(data).replace(/(^\[|\]$)/g, '')}
         ]
      
   `),
   fileData = readFileSync(path, 'utf-8');
   
   console.log({stringifiedData});

   if (!fileData || fileData === '') return writeFileSync(path, `${(stringifiedData)}`, 'utf-8');
   else {
      console.log(data);
      let stringifiedDataTwo = eval(`${JSON.stringify(data).replace(/(^\[|\]$)/g, '')},${fileData.replace(/\}$/, '')}`)
      writeFileSync(path, stringifiedDataTwo)

   }
   
}