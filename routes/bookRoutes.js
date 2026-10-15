import * as bookController from '../controllers/bookController.js';
import express from 'express';

const bookrouter = express.Router();

bookrouter.get('/all', bookController.fetchAllBooks);
bookrouter.post('/', bookController.createBook);
bookrouter.put('/:id', bookController.editBook);
bookrouter.delete('/:id', bookController.deleteBook);

export default bookrouter;

