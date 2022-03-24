class Controller {
  static get signature() {
    return 'Controller';
  }
}

class ItemController extends Controller {
  async index(ctx) {}
}

module.exports = ItemController;
