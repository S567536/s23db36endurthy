var express = require('express');
    const phone_controlers= require('../controllers/phone');
    var router = express.Router();
    /* GET phone */
    router.get('/', phone_controlers.phone_view_all_Page );
    // GET request for one phone.
    router.get('/phone/:id', phone_controlers.phone_detail);
    module.exports = router;
    /* GET detail phone page */
    router.get('/detail', phone_controlers.phone_view_one_Page);
    /* GET create phone page */
    router.get('/create', phone_controlers.phone_create_Page);



    