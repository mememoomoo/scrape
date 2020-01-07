const request = require("request");
const cheerio = require("cheerio");

// class = title
// class = intro

const scrape = function (cb) {
    request("https://wikileaks.org/", function(err, res, body){
        const $ = cheerio.load(body);
        const articles = [];

        $(".featured").each(function(i, element){
            const title = $(this).children(".title").text().trim();
            const intro = $(this).children(".intro").text().trim();
        })
    })
}