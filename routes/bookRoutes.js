import * as bookController from '../controllers/bookController.js';
import express from 'express';

const bookrouter = express.Router();

bookrouter.get('/all', bookController.fetchAllBooks);

export default bookrouter;