import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import * as middlewares from './middlewares';
import router from './router';
import MessageResponse from './interfaces/MessageResponse';
import { getAllOwners } from './database/owners/owner-crud';

require('dotenv').config();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


// app.get<{}, MessageResponse>('/', (req, res) => {
//   res.json({
//     message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
//   });
// });
app.get('/', async (req, res) =>{
  res.render('dashboard', { owners : await getAllOwners()});
})

app.use('/api/v1', router);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
