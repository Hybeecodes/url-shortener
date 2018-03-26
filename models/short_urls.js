

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require("mongodb-autoincrement");

const UrlSchema = new Schema({
    url_id:{
        type:String,
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

// UrlSchema.plugin(autoIncrement.mongoosePlugin);

const ShortUrl = mongoose.model('ShortUrl',UrlSchema);

module.exports = ShortUrl;

// module.exports.genUniqueId = function() {
//     var unique = // code to generate unique string
//     // check if unique string exists
//     ShortUrl.findOne({url_id:unique},function(err,url){
//         if(url){
            
//         }
//     })
    
// }