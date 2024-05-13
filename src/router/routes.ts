const express = require('express');

const router = express.Router();

const controller = require('../controllers/ownerController');

// todo render data over here
router.get('/',   ownerController  );
//router.post('/item/:itemID',    controller.postItemInformation);