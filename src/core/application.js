const EventEmitter = require('events');
const http = require('http');
const Context = require('./context');

const debug = require('debug')('matrix:application');

class Application extends EventEmitter {
  constructor(options = {}) {
    super();
    this.options = options;
  }

  listen(...args) {
    debug('listen');
    const server = http.createServer((req, res) => {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx);
    });
    return server.listen(...args);
  }

  createContext(req, res) {
    const context = new Context(req, res);
    context.req = req;
    context.res = res;

    context.state = {};
    return context;
  }

  handleRequest(ctx) {
    console.log(ctx);

    ctx.res.writeHead(200, { 'Content-Type': 'application/json' });
    ctx.res.end(
      JSON.stringify({
        data: 'Hello World!',
      })
    );

    return;
  }

  handleResponse(ctx) {}
}

module.exports = Application;
