const Router = require('../../src/core/router');

const router = new Router();

const handler = ctx => {
  console.log(ctx.path);
};
const m1 = function m1(ctx, next) {};
const m2 = async function m2(ctx, next) {};
const m3 = async function m3(ctx, next) {};

router.use('/*', m1);
router.use('/gists/*', [m2, m3]);

router.add('GET', '/', handler);
router.add('GET', '/*', handler);

// gists
router.add('GET', '/gists', handler);
router.add('POST', '/gists', handler);
router.add('GET', '/gists/public', handler);
router.add('GET', '/gists/starred', handler);
router.add('GET', '/gists/:gistId', handler);
router.add('PATCH', '/gists/:gistId', handler);
router.add('DEL', '/gists/:gistId', handler);
router.add('GET', '/gists/:gistId/commits', handler);
router.add('GET', '/gists/:gistId/forks', handler);
router.add('POST', '/gists/:gistId/forks', handler);
router.add('GET', '/gists/:gistId/star', handler);
router.add('PUT', '/gists/:gistId/star', handler);
router.add('DEL', '/gists/:gistId/star', handler);
router.add('GET', '/gists/:gistId/:sha', handler);
router.add('GET', '/users/:username/gists', handler);

// projects
router.get('/orgs/:org/projects', handler);
router.post('/orgs/:org/projects', handler);
router.get('/projects/:projectId', handler);
router.patch('/projects/:projectId', handler);
router.del('/projects/:projectId', handler);
router.get('/repos/:owner/:repo/projects', handler);
router.post('/repos/:owner/:repo/projects', handler);
router.post('/user/projects', handler);
router.get('/users/:username/projects', handler);
