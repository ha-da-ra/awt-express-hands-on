import { Request, Response } from "express";
import { getAllOwners } from "../database/owners/owner-crud";



export async function renderHomepage(req: Request, res: Response){

    res.render('dashboard', { owners: await getAllOwners() });

}


export function renderAddOwner(req: Request, res: Response){

    res.render('addOwner');

}