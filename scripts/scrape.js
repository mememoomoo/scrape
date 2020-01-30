const cheerio = require("cheerio");
const axios = require("axios");

const scrape = function (cb) {
    axios.get("https://www.theonion.com/").then( function(res){
        const $ = cheerio.load(res.data);
        const articles = [];
        
        $("article.sc-1pw4fyi-0").each(function(i, element){
            const link = $(this).children("div").children("a").attr("href");
            const title = $(this).children("div").children("a").children("h4").text();
            const information = {
                headline: title,
                link: link,
            }

            articles.push(information);
        });

        cb(articles);
    })
}

module.exports = scrape;
