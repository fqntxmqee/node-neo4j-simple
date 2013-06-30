var Curd = require("./../dao/Curd.js");
var User = require("./../domain/User.js");
var userDao = new Curd(User);

/**
 * GET /users
 */
exports.list = function (req, res, next) {
  userDao.getAll(function (err, users) {
    if (err) return next(err);
    res.render('users', {
      users: users
    });
  });
};

/**
 * POST /users
 */
exports.create = function (req, res, next) {
  userDao.create({
    name: req.body['name']
  }, function (err, user) {
    if (err) return next(err);
    res.redirect('/users/' + user.id);
  });
};

/**
 * GET /users/:id
 */
exports.show = function (req, res, next) {
  userDao.get(req.params.id, function (err, user) {
    if (err) return next(err);
    res.render('user', {
      user: user
    });
  });
};

/**
 * POST /users/:id
 */
exports.edit = function (req, res, next) {
  var data = {id: req.params.id, name: req.body['name']};
  userDao.update(data, function (err, user) {
    if (err) return next(err);
    res.redirect('/users/' + user.id);
  });
};

/**
 * DELETE /users/:id
 */
exports.del = function (req, res, next) {
  userDao.del(req.params.id, function (err, user) {
    if (err) return next(err);
    res.redirect('/users');
  });
};
