var express = require('express');
var router = express.Router();
const base64 = require('nodejs-base64-encode');
const Url = require('../models/short_urls');
// const Url = UrlModel.Url;
const root = "http://localhost:3000/";
var ShortUniqueId = require('short-unique-id');
 
// Instantiate
var uid = new ShortUniqueId();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname+'/index.html');
});

router.post('/shorten',function(req,res){
  console.log('here');
  const long_url = req.body.url;
  // first check if it has been shortened before
  Url.findOne({long_url:long_url},function(err,url){
    if(err){
      res.json({"status":0,"message":"sorry,Unable to fetch Url"});
    }else if(url){
    //  var encoded = base64.encode(url.url_id);
     var encoded_url = root+''+url.url_id;
     res.json({"status":1,"message":encoded_url});
    }else{
      var url_id = uid.randomUUID(4);
      
      var date_added = new Date();
     
      // console.log(encoded);
      var encoded_url = root+url_id;

      // save url details
      var newUrl = new Url({
        url_id : url_id,
        long_url : long_url,
        date_added : date_added
      });
      newUrl.save(function(err,url){
        if(err)
          throw err;
          else{
            console.log(encoded_url)
            res.json({"status":1,"message":encoded_url});
          }
            
      })
    }
  })
  
  
})
router.get('/:encoded_url',function(req,res){
  var encoded_url = req.params.encoded_url;
  // check if it exists
  
  Url.findOne({url_id:encoded_url},function(err,url){
    if(err){
      res.end("Sorry, error fetching url");
    }else if(url){
        var long_url = url.long_url;
        res.redirect(301,long_url);
    }else{
      res.end("Sorry,Url doesn't exists");
    }
  })

})

module.exports = router;
