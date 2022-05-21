const { error } = require("../Errors");
const { writeFileSync, readFileSync } = require('fs'),
path = __dirname.replace('\\Utils', '\\database.json');


exports.subtract = (key) => {
   if (!key) return error('empty')
   if (validKey(key)) return error('key');
   let r = readFileSync(path, 'utf-8') !== "" ? JSON.parse(readFileSync(path, 'utf-8')) : [];
   writeFileSync(path, JSON.stringify(eval(`r.slice(r.filter(i => i.${key}).length)`)), 'utf-8');
}
exports.find = (key, method) => {
   if (!key) return error('empty')
   if (validKey(key)) return error('key')
   if (method == 'find') {
      if (!readFileSync(path, 'utf-8')) throw error('key2', key)
      return eval(`JSON.parse(readFileSync(path, 'utf-8')).find(i => i.${key})`);
   }
}
exports.add = (key, value) => {
   let data = readFileSync(path, 'utf-8').replaceAll(/(\[|\])/g, '');
   if (!key || !value) return error('empty')
   if (validKey(key)) return error('key');
   if (readFileSync(path, 'utf-8').includes(key)) return;

   if (!data) {
      if (isArray(value)) return writeFileSync(path, `[ {"${key}": [${(value)}] } ]`, 'utf-8');
      if (typeof value === "number") return writeFileSync(path, `[ {"${key}": ${(value)} } ]`, 'utf-8');
      else return writeFileSync(path, `[ {"${key}": "${(value)}" } ]`, 'utf-8');
   } else if (data) {
      if (isArray(value)) {
         if (typeof value === "number") return writeFileSync(path, `[ ${data}, {"${key}": ${Number(value)} } ]`, 'utf-8');
         writeFileSync(path, `[ ${data}, {"${key}": [${(value)}] } ]`, 'utf-8');

         return
      }
      if (typeof value === "number") return writeFileSync(path, `[ ${data}, {"${key}": ${(value)} } ]`, 'utf-8');
      writeFileSync(path, `[ ${data}, { "${key}": "${(value)}" } ]`, 'utf-8');
   }
}
exports.shift = () => {
   let r = readFileSync(path, 'utf-8') !== ""
      ? JSON.parse(readFileSync(path, 'utf-8'))
      : [];
   r.shift();
   writeFileSync(path, JSON.stringify(r), 'utf-8');
}
exports.filter = (callback) => {
   let r = readFileSync(path, 'utf-8') !== ""
      ? JSON.parse(readFileSync(path, 'utf-8'))
      : [];
   return r.flat().filter(callback);
}
exports.findAndUpdateOne = (key, args) => {
   let keyFinded = this.find(key, 'find');
   if (keyFinded === undefined) return error("key2", key)
   let result = args.$new(keyFinded[key]);

   if (isData()) {
      writeFileSync(path, '', 'utf-8');
      this.add(key, result);
      return result;
   }

   this.subtract(key);
   this.add(key, res);
   return result;
}
function isData() { return readFileSync(path, "utf-8") === ""; }
function validKey(key) { return typeof key === "string" && (/(^[0-9])/gi).test(key) }
