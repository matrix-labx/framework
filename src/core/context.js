/**
 *
 */
class Context {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.handlers = [];
    // 表示当前调用 next 要执行的控制器序列，初始值为 -1，每次调用自增 1
    this.index = -1;
  }

  next() {}
}

module.exports = Context;
