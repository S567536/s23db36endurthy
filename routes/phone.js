var express = require('express');
    const phone_controlers= require('../controllers/phone');
    var router = express.Router();
    /* GET costumes */
    router.get('/', phone_controlers.phone_view_all_Page );
    // GET request for one costume.
    router.get('/phone/:id', phone_controlers.phone_detail);
    module.exports = router;



    