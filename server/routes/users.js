/* FileName : index.js */
/* StudentName :Anmol Singh */
/* Student Id :301145362 */
/* Date : 10/22/2021 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Annie');
});

module.exports = router;
