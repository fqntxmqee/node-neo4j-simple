var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase(process.env.NEO4J_URL || 'http://localhost:7474');

var INDEX_NAME = 'nodes';
var INDEX_KEY = '__type__';

var Curd = exports.Curd = module.exports = function Curd(__class__) {
    this.__class__ = __class__;
}

Curd.prototype.get = function (id, callback) {
  var __class__ = this.__class__;
  db.getNodeById(id, function (err, node) {
    if (err) return callback(err);
    callback(null, new __class__(node));
  });
}

Curd.prototype.getAll = function (callback) {
  var __class__ = this.__class__;
  db.getIndexedNodes(INDEX_NAME, INDEX_KEY, __class__.__type__, function (err, nodes) {
    if (err) return callback(null, []);
    var users = nodes.map(function (node) {
      return new __class__(node);
    });
    callback(null, users);
  });
}

Curd.prototype.query = function (queryStr, paramArr, callback) {
  db.query(queryStr, paramArr, function (err, results) {
    if (err) return callback(err);
    callback(null, results);
  });
}

Curd.prototype.create = function (data, callback) {
  var node = db.createNode(data);
  var __class__ = this.__class__;
  node.save(function (err) {
    if (err) return callback(err);
    node.index(INDEX_NAME, INDEX_KEY, __class__.__type__, function (err) {
      if (err) return callback(err);
      callback(null, new __class__(node));
    });
  });
}

Curd.prototype.update = function (data, callback) {
  var __class__ = this.__class__;
  db.getNodeById(data.id, function (err, node) {
    if (err) return callback(err);
    for(var i in data) {
      if (i === 'id') continue;
      node.data[i] = data[i];
    }
    node.save(function () {
      if (err) return callback(err);
      callback(null, new __class__(node));
    })
  });
}

Curd.prototype.updateStr = function (updateStr, callback) {

}

Curd.prototype.del = function (id, callback) {
  var __class__ = this.__class__;
  db.getNodeById(id, function (err, node) {
    if (err) return callback(err);
    node.del(function (err) {
      callback(err);
    }, true);
  });
}

Curd.prototype.deleteAll = function (callback) {

}


