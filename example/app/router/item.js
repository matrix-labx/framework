exports.getItem = {
  name: '首页',
  method: 'GET',
  path: '/item',
  schema: {
    query: {
      type: 'object',
      properties: {
        id: { type: 'number' },
      },
    },
  },
  handler: 'ItemController:getItem',
};

exports.createItem = {
  name: '添加项',
  method: 'POST',
  path: '/item',
  schema: {
    body: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        description: { type: 'string' },
      },
    },
  },
  handler: 'ItemController:createItem',
};

exports.updateItem = {
  name: '更新项',
  method: 'PUT',
  path: '/item',
  schema: {
    body: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        title: { type: 'string' },
        description: { type: 'string' },
      },
    },
  },
  handler: 'ItemController:updateItem',
};
