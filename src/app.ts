// src/app.ts
import express, { Application } from 'express';
import dotenv from 'dotenv';
import todosRouter from './routes/todos';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use('/todos', todosRouter);

export default app;
