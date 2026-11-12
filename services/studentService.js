import * as studentModels from '../models/studentModels.js';
import ValidationError from '../utils/ValidationError.js';


export const fetchAllstudents = async () => {
   const students = await studentModels.fetchAllstudents();
  return students;
};

//insert
export const createstudents = async (students) => {
  if (await studentModels.findBySrcode(students.srcode)) {
    const err = new Error("SR code already exists");
    err.status = 409;
    throw err;
  }

  const studentsId = await studentModels.insert(students);
  return studentsId;
}

//update
export const updatestudents = async (students) => {
  if (await studentModels.findBySrcode(students.srcode, students.id)) {
    const err = new Error("SR code already exists");
    err.status = 409;
    throw err;
  }

  const updatedstudents = await studentModels.update(students);
  return updatedstudents;
}

//delete
export const deletestudents = async (id) => {
  const existing = await studentModels.findById(id);

  if (!existing) {
    throw new ValidationError(404, 'Student does not exist!');
  }

  const deletedstudents = await studentModels.remove(id);
  return deletedstudents;
}