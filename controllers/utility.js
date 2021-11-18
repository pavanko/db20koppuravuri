var Utility = require('../models/utility'); 
 
// List of all Utilitys 
exports.utility_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Utility list'); 
}; 
 
// for a specific Utility. 
exports.utility_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Utility detail: ' + req.params.id); 
}; 

// for a specific utility. 
exports.utility_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Utility.findById(req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
// Handle Utility delete on DELETE. 
exports.utility_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Utility.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
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

//Handle Utility update form on PUT. 
exports.utility_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Utility.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Name)  
               toUpdate.Name = req.body.Name; 
        if(req.body.Uses) toUpdate.Uses = req.body.Uses; 
        if(req.body.Cost) toUpdate.Cost = req.body.Cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

 // Handle a show one view with id specified by query 
 exports.utility_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Utility.findById( req.query.id) 
        res.render('utilitydetail',  
{ title: 'Utility Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a utility. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.utility_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('utilitycreate', { title: 'Utility Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 