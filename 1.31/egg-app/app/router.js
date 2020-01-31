'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/register', controller.user.register);
  router.post('/login', controller.user.login);

  router.post('/add',controller.blog.addList)
  router.post('/delete',controller.blog.deleteList)
  router.post('/change',controller.blog.changeList)
  router.get('/find',controller.blog.List)

};
