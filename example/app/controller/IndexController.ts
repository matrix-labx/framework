import { Controller, Get } from '../../../src';

@Controller()
export default class IndexController {
  @Get('/', {
    name: '首页',
    description: '这是一个首页',
  })
  async getIndexHtml() {}
}
