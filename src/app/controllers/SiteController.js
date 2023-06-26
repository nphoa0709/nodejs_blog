class SiteController {
    //[GET] /news
    search(req, res){
        res.render('search');
    }

    //[GET] /news/:slug
    index(req, res){
        res.send('home');
    }
}

module.exports = new SiteController;