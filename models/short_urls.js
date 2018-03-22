

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require("mongodb-autoincrement");

const UrlSchema = new Schema({
    id:{
        type:Number,
        required:true
    },
    long_url:{
        type:String,
        required:true
    },
    date_added:{
        type:Date,
        required: true
    }
})

UrlSchema.plugin(autoIncrement.mongoosePlugin);

const ShortUrl = mongoose.model('ShortUrl',UrlSchema);

module.exports = ShortUrl;