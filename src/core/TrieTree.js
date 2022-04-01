class Node {
  constructor() {
    this.children = [];
    this.segment = '';
    this.isLast = false;
    this.middlewares = [];
  }
}

class TrieTree {
  constructor() {
    this.root = new Node();
  }
}

module.exports = TrieTree;
