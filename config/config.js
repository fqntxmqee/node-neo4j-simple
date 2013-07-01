var path = require('path');
var route = require('./route.js');

exports = module.exports = function(app, express) {

    app.set('port', process.env.PORT || 8888);
    app.set('views', __dirname + '/../views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session({
        secret : 'secret'
    }));
    app.use(app.router);
    app.use(express.static(path.join(__dirname, '/../public')));

    // development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }

    // routes
    route(app);
};
