import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import { getAllOwners } from './database/owners/owner-crud';
import { ownerRouter } from './router/ownerRouter';
import {urlencoded} from "body-parser";
import { viewRouter } from './router/viewRouter';
import { NextFunction, Request, Response } from "express";


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
app.get('/credits', function (req, res) {
	res.render('credits');
});


// express routing
app.use("/owners",  ownerRouter);
app.use("/",        viewRouter);



// Error Handling Middleware
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  res.status(500).send(`<html>
  <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap" rel="stylesheet">
      <style>
          body {
              font-family: "Maven Pro", sans-serif;
              margin: 0;
              padding: 0;
              display: flex;          
              justify-content: center;           
              align-items: center;           
              flex-direction: column;
          }
      </style>
      <title>Weiterleitung</title>
      <meta http-equiv="refresh" content="3;url=/new-page" />
  </head>
  
  <body>
      <h1>${err.message}</h1>
      <p>You will be redirected in 3 seconds.</p>
  </body>
  
  </html;`);
});

export default app;
