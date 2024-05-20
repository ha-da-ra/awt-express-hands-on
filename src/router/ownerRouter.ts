import { Router } from "express";
import { createOwner, getOwners } from '../controllers/ownerController';

export const ownerRouter = Router();

ownerRouter.get("/",    getOwners);
ownerRouter.post("/",   createOwner);
