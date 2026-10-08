import * as bookController from '../controllers/bookController.js';
import express from 'express';

const bookrouter = express.Router();

bookrouter.get('/all', bookController.fetchAllBooks);
bookrouter.post('/', bookController.createBook);

export default bookrouter;

