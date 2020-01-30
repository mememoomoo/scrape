const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const headlineSchema = new Schema({
    headline: {
        type: String,
        required: true,
        unique: true
    },
    date: String,
    saved: {
        type: Boolean,
        default: false
    }
});
const Headline = mongoose.model("Headline", headlineSchema);
module.exprts = Headline;
