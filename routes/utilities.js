var express = require('express');
const utility_controlers= require('../controllers/utility');
var router = express.Router();

/* GET utility */

router.get('/', utility_controlers.utility_view_all_Page );
module.exports = router;