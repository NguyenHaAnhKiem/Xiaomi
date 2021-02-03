class AdminController {
    async product_management(req, res) {
        res.render('vwAdmin/productManagement');
    };

    async reviews_management(req, res) {
        res.render('vwAdmin/reviewsManagement');
    };

    async member_management(req, res) {
        res.render('vwAdmin/memberManagement');
    };
}

module.exports = new AdminController;