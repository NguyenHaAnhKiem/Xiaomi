class HomeController {
    async index (req, res) {
        res.render("home");
    };

    async login (req, res) {
        res.render("login", {
            layout: false
        });
    };

    async register (req, res) {
        res.render("register", {
            layout: false
        });
    };
    
};

module.exports = new HomeController;