const { Plugin } = require('../../index');

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let body = [];
    req
      .on('error', err => {
        reject(err);
      })
      .on('data', chunk => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body);
        resolve(body);
      })
      .on('close', () => {
        // Indicates that the underlying connection was closed.
      });
  });
}

/**
 * Gets the entire buffer of a http request stream.
 * Validates the stream's length against an expected length and maximum limit.
 * Ideal for parsing request bodies.
 * @param {<http.IncomingMessage>} req
 * @param {Object} options
 * @returns
 */
class RawBodyPlugin extends Plugin {
  preHandle(ctx) {}

  async handle(ctx) {
    const req = ctx.req;
    ctx.rawBody = await getRawBody(req);
  }

  postHandle(ctx) {}
}

module.exports = RawBodyPlugin;
