import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import { getAllOwners } from './database/owners/owner-crud';
import { ownerRouter } from './router/ownerRouter';
import {urlencoded} from "body-parser";
import { viewRouter } from './router/viewRouter';

require('dotenv').config();


// create instance
const app = express();


// Set up body-parser middleware
app.use(urlencoded({ extended: false }));


// view engine se
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


// direct request handling
app.get('/example', function (req, res) {
  res.render("Hello World");
});

app.get('/credits', function (req, res) {
	res.render('credits');
});


// express routing
app.use("/owners",  ownerRouter);
app.use("/",        viewRouter);


/*
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
*/


export default app;
