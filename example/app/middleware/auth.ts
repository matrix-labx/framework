import Middleware from '../../../src/decorator/middleware';

@Middleware()
export default class Auth {
  async handle() {}
}
