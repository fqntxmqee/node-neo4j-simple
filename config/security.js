
exports = module.exports = function(app) {

    app.use(function (req, res, next) {
        var url = req.originalUrl;
        /*if (url != "/login" && !req.session.user) {
            return res.redirect("/login");
        }*/
        next();
    });
};