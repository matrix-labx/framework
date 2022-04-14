/**
 * 路由类型
 * 静态路由，例如：/foo/bar
 * 通配符，例如：/foo/*
 * 参数路由，即命名路由，例如：/foo/:bar
 */
const Type = {
  STATIC: 'STATIC',
  WILDCARD: 'WILDCARD',
  PARAM: 'PARAM',
};

class TrieNode {
  constructor() {
    this.segment = '';
    this.isEndpoint = false;
    this.type = '';
    this.children = [];
    this.handler = null;
    this.middlewares = [];
  }
}

class TrieTree {
  constructor() {
    this.root = new TrieNode();
  }

  insert() {}
}

module.exports = TrieTree;
