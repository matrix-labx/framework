const Middleware = require('../../src/core/middleware');

test('compose middleware to be 1,2,3,4', () => {
  const middleware = new Middleware();

  middleware.push((ctx, next) => {
    ctx.arr.push(1);
    return next().then(() => {
      ctx.arr.push(4);
    });
  });

  middleware.push(async (ctx, next) => {
    ctx.arr.push(2);
    await next();
    ctx.arr.push(3);
  });

  const ctx = { arr: [] };
  middleware.compose(ctx).then(() => {
    expect(ctx.arr.toString()).toBe('1,2,3,4');
  });
});
