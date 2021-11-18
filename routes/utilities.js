var express = require('express');
const utility_controlers= require('../controllers/utility');
var router = express.Router();

/* GET utility */

router.get('/', utility_controlers.utility_view_all_Page );


// GET request for one utility. 
router.get('/utility/:id', utility_controlers.utility_detail); 
/* GET detail utility page */ 
router.get('/detail', utility_controlers.utility_view_one_Page); 
/* GET create utility page */ 
router.get('/create', utility_controlers.utility_create_Page); 
/* GET create update page */ 
router.get('/update', utility_controlers.utility_update_Page); 
/* GET create costume page */ 
router.get('/delete', utility_controlers.utility_delete_Page); 
module.exports = router;