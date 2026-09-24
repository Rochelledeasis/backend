import * as studentModels from '../models/studentModels.js';

export const fetchAllStudents = async () => {
    const students = await studentModels.fetchAllStudents();
    return students;
};