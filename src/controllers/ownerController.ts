const Owner = require("../database/owners/OwnerModel");


// Controller handler func for creating an Owner
exports.createOwner = function(req, res){

    console.log(req.body)

    let owner = new Owner({
        name: req.body.name,
        number: req.body.number,
        dogs: [{}]
    })

    owner.save();
    res.redirect("/db");

}


exports.listAllItems = function(req, res){

    res.redirect('/db');
    

}