import { Router } from "express";
import { redirectToHomepage, renderAddOwner, /*renderCredits,*/ renderHomepage } from "../controllers/viewController";

export const viewRouter = Router();

viewRouter.get("/",         renderHomepage);
viewRouter.get("/new",      renderAddOwner);
//viewRouter.get("/credits",  renderCredits)
viewRouter.get("*",         redirectToHomepage);