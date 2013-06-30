var security = require('./security.js');
var userController = require('./../controllers/UserController.js');

exports = module.exports = function (app) {
  security(app);
  // routes
  app.get('/', function(req, res){
    res.render('index', { title: 'Node-neo4j-simple' });
  });
  app.get('/users', userController.list);
  app.post('/users', userController.create);
  app.get('/users/:id', userController.show);
  app.post('/users/:id', userController.edit);
  app.del('/users/:id', userController.del);
};
