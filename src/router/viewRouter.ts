import { Router } from "express";
import { renderAddOwner, renderHomepage } from "../controllers/viewController";

export const viewRouter = Router();

viewRouter.get("/", renderHomepage);
viewRouter.get("/new", renderAddOwner);
