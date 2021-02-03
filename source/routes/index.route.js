const { request } = require('express');

const HomeRouter = require("./home.route");
const ProductRouter = require("./product.route");
const MemberRouter = require("./member.route");
const AdminRouter = require("./admin.route");

module.exports = function (app) {
    app.use('/', HomeRouter);
    app.use('/product', ProductRouter);
    app.use('/member', MemberRouter);
    app.use('/admin', AdminRouter);

    require('../app/middlewares/error.mdw')(app);
}


