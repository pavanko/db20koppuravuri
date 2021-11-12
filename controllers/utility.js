var Utility = require('../models/utility'); 
 
// List of all Utilitys 
exports.utility_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Utility list'); 
}; 
 
// for a specific Utility. 
exports.utility_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Utility detail: ' + req.params.id); 
}; 
 
// Handle Utility create on POST. 
exports.utility_create_post =async function(req, res) { 
    console.log(req.body)
    let document = new Utility();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Utility_name":"regular", "quantity":13, "cost":43.56}
    document.Name = req.body.Name;
    document.Uses = req.body.Uses;
    document.Cost = req.body.Cost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}; 
 
// Handle Utility delete form on DELETE. 
exports.utility_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Utility delete DELETE ' + req.params.id); 
}; 
 
// Handle Utility update form on PUT. 
exports.utility_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Utility update PUT' + req.params.id); 
}; 

// List of all Utilitys
exports.utility_list = async function (req, res) {
    try {
        theUtility = await Utility.find();
        res.send(theUtility);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.utility_view_all_Page = async function (req, res) {
    try {
        theUtility = await Utility.find();
        res.render('utilities', {
            title: 'Utility Search Results',
            results: theUtility
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};