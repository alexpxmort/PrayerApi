import NodeCache from 'node-cache';

class Cache {

  constructor() {
    this.cache = new NodeCache();
  }

   set(key, value) {
    return this.cache.set(key, value);
  }

   get(key) {
    return this.cache.get(key);
  }

   del(key) {
    return this.cache.del(key);
  }

   flush() {
    this.cache.flushAll();
  }
}

export default new  Cache();