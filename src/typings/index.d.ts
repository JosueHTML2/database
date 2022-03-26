import { arguments, JsDB_Data } from "./arguments-types";

/**
 * @author Josué Figueiredo
 * @class DataBase
 * @module @josue7/database
 * @gitHub [Click here](https://github.com/JosueHTML2/Amibiente)
 */
declare class DataBase<K, V> {
   /**
    * @do add the key and value in json file
    */
   set(key: string, value: any): void;
   /**
    * @returns the key and the value
    */
   find(key: string): any;
   /**
    * 
    * @returns  DataBase to json or the key and the value
    */
   fetch(): Promise<any>;
   /** 
    * @returns true if the key exists and false if not
   */
   has(key: string): boolean;
   /**
    * @returns removes the first element in database
    */
   shift(): void
   /**
    * 
    * @param callback function
    * 
    */
   filter(callback: (key: string, index: number, array: any[]) => any): any
   /**
    * @method DataBase.clear(): void
    * @returns deletes everything in DataBase
    */
   clear(): void;
   /**
    * @method DataBase.remove
    * @do Removes a key from the database
    */
   remove(key: string): void;
   /**
    * 
    * @param key 
    * @param arguments 
    */
   update(key: string, arguments: arguments<V>): void;
   /**
    * @returns DataBase to json
    */
   toJSON(): JsDB_Data[];
}
declare class Collection<T> extends Set<T> {
   set(...data: T[]): this;
   size: number;
   add(...data: T[]): this;
   forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
   has(value: T): boolean;
   clear(): void;
   delete(value: T): boolean;
   entries(): IterableIterator<[T, T]>;
   keys(): IterableIterator<T>;
   values(): IterableIterator<T>;
}
export declare module JsDB {
   interface Database<K, V> {
      new(): DataBase<K, V>;
   }
   interface Collection<T> {
      new(): Collection<T>;
   }
}