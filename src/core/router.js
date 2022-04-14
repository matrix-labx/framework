const TrieTree = require('./trie');

class Router {
  constructor() {
    this.trieTree = new TrieTree();
  }

  add(method, path, middleware, handler) {}

  find(method, path) {}

  use() {}

  get(path, middleware, handler) {
    return this.add('GET', path, middleware, handler);
  }

  post(path, middleware, handler) {
    return this.add('POST', path, middleware, handler);
  }

  put(path, middleware, handler) {
    return this.add('PUT', path, middleware, handler);
  }

  del(path, middleware, handler) {
    return this.add('DEL', path, middleware, handler);
  }

  patch(path, middleware, handler) {
    return this.add('PATCH', path, middleware, handler);
  }
}

module.exports = Router;
