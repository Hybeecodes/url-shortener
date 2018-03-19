var express = require('express');
var router = express.Router();
const base64 = require('base64-js');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/url_shortner',function(req,res){
  const long__url = req.body.long_url;

})

module.exports = router;
