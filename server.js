const express = require("express");
const bodyParser = require("body-parser");
const expressHandlebars = require("express-handlebars");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();
const router = express.Router();

require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("mongoose connection successful")
    }
});

app.use(router);

app.listen(PORT, function() {
    console.log("Listening to port: " + PORT);
});
