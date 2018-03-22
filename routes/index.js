var express = require('express');
var router = express.Router();
const base64 = require('nodejs-base64-encode');
const ShortUrl = require('../models/short_urls');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/home/megastar/Documents/projects/nodejs/url-shortner/index.html');
});

router.post('/url_shortner',function(req,res){
  const long__url = req.body.long_url;


})

module.exports = router;
