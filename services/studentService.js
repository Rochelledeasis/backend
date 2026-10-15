import * as studentModels from '../models/studentModels.js';

export const fetchAllStudents = async () => {
    const students = await studentModels.fetchAllStudents();
    return students;
};

export const createStudents = async (student) => {
    const studentId = await studentModels.insert(student);
    return studentId;
};

export const updateStudent = async (student) => {
    const updatedStudent = await studentModels.update(student);
    return updatedStudent;
}
