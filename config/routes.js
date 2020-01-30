const scrape = require("../scripts/scrape");
const headlineController = require("../controllers/headlines");
const notesController = require("../controllers/notes");


module.exports = function(router) {
    router.get("/", function(req, res) {
        res.render("home");
    });

    router.get("/saved", function(req, res) {
        res.render("saved");
    });

    router.get("/api/fetch", function(req, res) {
        headlinesController.fetch(function(err, docs){
            //write if/else statement when getting articles to show the articles or give a statement there are no articles.
        })
    })
}