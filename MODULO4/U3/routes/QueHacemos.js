var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('quehacemos', { title: 'Que hacemos' });
  });
  

  module.exports = router;
  