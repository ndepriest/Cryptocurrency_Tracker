var express = require('express');
var router = express.Router();

/* GET watchlist page. */
router.get('/watchlist', function(req, res, next) {
  res.render('watchlist');
});

module.exports = router;
