import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import * as middlewares from './middlewares';
//import router from './router';
import MessageResponse from './interfaces/MessageResponse';
import { getAllOwners } from './database/owners/owner-crud';

// routes
import router from "../src/router/routes";

require('dotenv').config();


// create instance
const app = express();





// todo fix
/*    
app.get('*', function (req, res) {
  res.redirect('/');
});
*/

// add this into routes ??
// view engine se
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// app.use(routes)



// direct request handling
app.get('/example', function (req, res) {
  res.send("Hello World");
});

/*
app.get('/', function (req, res) {
  res.redirect('/db');
});
*/

app.get('/db', async (req, res) => {
  res.render('dashboard', { owners: await getAllOwners() });
})



app.use('/', router);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);



export default app;
