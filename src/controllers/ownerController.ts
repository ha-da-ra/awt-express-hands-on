import { Request, Response } from "express";
import { addOwner, getAllOwners } from '../database/owners/owner-crud';
import { IOwner } from "../database/owners/IOwner";



export async function getOwners(req: Request, res:Response){

    try {
        const owners = await getAllOwners();
        res.status(200).send(owners);
    } catch (error) {
        res.status(500);
    }

}


export async function createOwner(req: Request, res:Response){
    try {
        const newOwner : IOwner = req.body;
        if (newOwner.name && newOwner.name != ""){
            console.log(newOwner);
            await addOwner(newOwner);
            // todo owner created für 2s dann redirect !middleware
            res.status(201).redirect('/');
        } else {
            res.status(400).send('no name');
        }
    } catch (error) {
        // todo status send mit middleware
        res.status(500).send('');
    }
}
