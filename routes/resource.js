var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var utility_controller = require('../controllers/utility');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// utility ROUTES ///
// POST request for creating a utility.
router.post('/resource/utility', utility_controller.utility_create_post);
// DELETE request to delete utility.
router.delete('/resource/utility/:id', utility_controller.utility_delete);
// PUT request to update utility.
router.put('/resource/utility/:id', utility_controller.utility_update_put);
// GET request for one utility.
router.get('/resource/utility/:id', utility_controller.utility_detail);
// GET request for list of all utility items.
router.get('/resource/utility', utility_controller.utility_list);
module.exports = router;