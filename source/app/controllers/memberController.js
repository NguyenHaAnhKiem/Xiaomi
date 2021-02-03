class MemberController {
    async my_reviews(req, res) {
        res.render('vwMember/myReviews');
    };

    async withdrawal(req, res) {
        res.render('vwMember/withdrawal');
    };
}

module.exports = new MemberController;