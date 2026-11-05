import * as studentModels from '../models/studentModels.js';

export const fetchAllStudents = async () => {
    const students = await studentModels.fetchAllStudents();
    return students;
};

const doesStudentExist = async (student) =>{
    let existing;
    if(Object.hasOwn(student, "id")){
        existing = await studentModels.findStudentById(student.id);
    }else{
        existing = await studentModels.findStudentByNameAndAuthor(student);
    }

    if(existing.length > 0){
        return true;
    }
    return false;
}

export const createStudents = async (student) => {
     if(!student.name || !student.srcode || !student.program){
        throw new ValidationError(404, "All fields are required");
    }
    
    const existing = await doesStudentExist(student);
    
    if(existing){
        throw new ValidationError(409, 'Student already exists!');
    }
    const studentId = await studentModels.insert(student);
    return studentId;
};

export const updateStudent = async (student) => {
    if(!student.name || !student.srcode || !student.program){
        throw new ValidationError(404, "All fields are required");
    }
    
    const existing = await doesStudentExist(student);
    
    if(!existing){
        throw new ValidationError(404, 'does not exists!');
    }
    const updatedStudent = await studentModels.update(student);
    return updatedStudent;
}

export const deleteStudent = async (id) => {
    const existing = await doesStudentExist(id);
    
    if(!existing){
        throw new ValidationError(404, 'does not exists!');
    }

    const deletedStudent = await studentModels.deleteStudent(id);
    return deletedStudent;
}   