import { Router } from "express";
import { getOwners } from '../controllers/ownerController';

//import { ownerController} from '../controllers/ownerController';
//import MessageResponse from '../interfaces/MessageResponse';
//import emojis from './emojis';

const router = Router();

router.get("/owners", getOwners);

//const controller = require('../controllers/ownerController');

// todo render data over here
//router.get('/',   ownerController.listAllItems()  );
//router.post('/item/:itemID',    controller.postItemInformation);

// redirect to /db
router.get('/db', (req, res) => {
     
    
});







export default router;