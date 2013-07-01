
var User = exports.User = module.exports = function User(_node) {
    // neo4j node
    this._node = _node;
}

User.__type__ = 'User';

Object.defineProperty(User.prototype, 'id', {
    get: function () { return this._node.id; }
});

Object.defineProperty(User.prototype, 'exists', {
    get: function () { return this._node.exists; }
});

Object.defineProperty(User.prototype, 'name', {
    get: function () {
        return this._node.data['name'];
    },
    set: function (name) {
        this._node.data['name'] = name;
    }
});
