var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var phone_controller = require('../controllers/phone');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a phone.
router.post('/phone', phone_controller.phone_create_post);
// DELETE request to delete phone.
router.delete('/phone/:id', phone_controller.phone_delete);
// PUT request to update phone.
router.put('/phone/:id', phone_controller.phone_update_put);
// GET request for one phone.
router.get('/phone/:id', phone_controller.phone_detail);
// GET request for list of all phone items.
router.get('/phone', phone_controller.phone_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"phone", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
