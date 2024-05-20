const Owner = require("../database/owners/OwnerModel");

import express from 'express';
import { Router, Request, Response, NextFunction} from "express";
import { getAllOwners } from '../database/owners/owner-crud';




export async function getOwners(req: Request, res:Response){

    try {
        const owners = await getAllOwners();
        res.status(200).send(owners);
    } catch (error) {
        res.status(500);
    }

}





/*
// Controller handler func for creating an Owner
exports.createOwner = function(req: Request, res: Response){

    console.log(req.body)

    /*
    let owner = new Owner({
        name: req.body.name,
        number: req.body.number,
        dogs: [{}]
    })

    owner.save();
    res.redirect("/db");

}
*/

exports.listAllItems = function(req: Request, res: Response){

    res.redirect('/db');
    

}







//export ownerController;