class ProductController {
    async detail(req, res) {
        res.render('vwProduct/productDetail');
    };

    async create_product(req, res) {
        res.render('vwProduct/createProduct');
    };
}

module.exports = new ProductController;