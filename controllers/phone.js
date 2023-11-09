var phone = require('../models/phone');
// List of all Phone
exports.phone_list = function(req, res) {
res.send('NOT IMPLEMENTED: Phone list');
};
// for a specific phone.
exports.phone_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Phone detail: ' + req.params.id);
};
// Handle phone create on POST.
exports.phone_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: phone create POST');
};
// Handle phone delete form on DELETE.
exports.phone_delete = function(req, res) {
res.send('NOT IMPLEMENTED: phone delete DELETE ' + req.params.id);
};
// Handle phone update form on PUT.
exports.phone_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: phone update PUT' + req.params.id);
};
