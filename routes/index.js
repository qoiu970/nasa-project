var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nasa_project' });
});

router.get('/added', function(req, res, next) {
  let  a = parseInt(req.query.a),
       b = parseInt(req.query.b);
  res.send(a+ "+"+b+"="+(a+b));
});
module.exports = router;
