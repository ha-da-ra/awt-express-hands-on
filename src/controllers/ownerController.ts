
import {  Request, Response,} from "express";
import { getAllOwners } from '../database/owners/owner-crud';



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
        const owners = await getAllOwners();
        res.status(200).send(owners);
    } catch (error) {
        res.status(500);
    }

}



