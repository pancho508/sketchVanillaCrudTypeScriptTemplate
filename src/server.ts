import express = require('express');
import * as dotenv from 'dotenv';
import todosRouter from './routes/todos';

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // parse JSON bodies

// Routes
app.use('/todos', todosRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
