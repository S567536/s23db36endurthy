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

// List of all phone
exports.phone_list = async function(req, res) {
    try{
    thePhone = await phone.find();
    res.send(thePhone);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
    // Handle a show all view
    exports.phone_view_all_Page = async function(req, res) {
    try{
    thePhone = await phone.find();
    res.render('phone', { title: 'Phone Search Results', results: thePhone });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle Costume create on POST.
exports.phone_create_post = async function(req, res) {
    console.log(req.body)
    let document = new phone();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Phone_Name = req.body.Phone_Name;
    document.Phone_price = req.body.Phone_price;
    document.Phone_Storage = req.body.Phone_Storage;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // for a specific Costume.
exports.phone_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await phone.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

    // Handle Costume update form on PUT.
exports.phone_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await phone.findById( req.params.id)
    // Do updates of properties
    if(req.body.Phone_Name) toUpdate.Phone_Name = req.body.Phone_Name;
    if(req.body.Phone_price) toUpdate.Phone_price = req.body.Phone_price;
    if(req.body.Phone_Storage) toUpdate.Phone_Storage = req.body.Phone_Storage;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };

// Handle Costume delete on DELETE.
exports.phone_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await phone.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.phone_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await phone.findById( req.query.id)
    res.render('phonedetail',{ title: 'Phone Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    
    
        
    
