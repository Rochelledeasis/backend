import * as studentController from '../controllers/studentController.js';
import express from 'express';

const studentrouter = express.Router();

studentrouter.get('/all', studentController.fetchAllstudents);
studentrouter.post('/', studentController.createstudents);
studentrouter.put('/:id', studentController.editstudents);
studentrouter.delete('/:id', studentController.deletestudents);

export default studentrouter;
