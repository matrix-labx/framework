class Middleware extends Array {
  next(context, last, i, done, called, fn) {
    if ((done = i > this.length)) return;

    fn = this[i] || last;

    return (
      fn &&
      fn(context, () => {
        if (called) throw new Error('next() called multiple times');
        called = true;
        return Promise.resolve(this.next(context, last, i + 1));
      })
    );
  }

  compose(context, last) {
    try {
      return Promise.resolve(this.next(context, last, 0));
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

module.exports = Middleware;
