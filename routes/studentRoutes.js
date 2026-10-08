import * as studentController from '../controllers/studentController.js';
import express from 'express';

const studentrouter = express.Router();

studentrouter.get('/all', studentController.fetchAllStudents);
studentrouter.post('/', studentController.createStudents);

export default studentrouter;
