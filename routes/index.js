var express = require('express');
var router = express.Router();
var pagar = require('../src/business/pagar')


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.redirect('/pagar');
});

router.get('/pagar', function(req, res, next) {
  console.log('alo');
  pagar(req,res)
});

router.post('/pay-notification', function(req, res, next) {
  console.log('alouses');
  res.sendStatus(200);
});

module.exports = router;
