import * as studentService from  '../services/studentService.js';

const SRCODE_REGEX = /^\d{2}-\d{5}$/;

export const fetchAllstudents = async (req, res) =>{
    const students =await studentService.fetchAllstudents();
    res.status(200).json(students);
};

//create
export const createstudents = async (req, res) => {
    const {name, srcode, program} = req.body;

    if (!name || !srcode || !program) {
        return res.status(400).json({
            success: false,
            error: "name, srcode and program are required"
        });
    }

    if (!SRCODE_REGEX.test(String(srcode).trim())) {
        return res.status(400).json({
            success: false,
            error: "Invalid SR code. Use the format 24-12345"
        });
    }

    const students = {name, srcode: String(srcode).trim(), program};

    try{
        const studentsId = await studentService.createstudents(students);
        res.status(200).json({
            success: true,
            message: studentsId
        });
    }catch(e){
        console.log(e);
        res.status(e.status || 500).json({
            error: e.status ? e.message : "Internal Server Error"
        });
    }
}

//editstudents
export const editstudents = async (req, res) => {
    const {name, srcode, program} = req.body;
    const { id } = req.params;

    if (!name || !srcode || !program) {
        return res.status(400).json({
            success: false,
            error: "name, srcode and program are required"
        });
    }

    if (!SRCODE_REGEX.test(String(srcode).trim())) {
        return res.status(400).json({
            success: false,
            error: "Invalid SR code. Use the format 24-14728"
        });
    }

    const students = {id: parseInt(id), name, srcode: String(srcode).trim(), program};

    try{
        const updatedstudents = await studentService.updatestudents(students);
        res.status(200).json({
            success: true,
            message: updatedstudents
        });
    }catch(e){
        console.log(e);
        res.status(e.status || 500).json({
            error: e.status ? e.message : "Internal Server Error"
        });
    }
}


//delete
export const deletestudents = async (req, res) => {
    const { id } = req.params;
   
    try{
        const deletedstudents = await studentService.deletestudents(parseInt(id));
        res.status(200).json({
            success: true,
            message: deletedstudents
        });
    }catch(e){
        console.log(e);
        res.status(e.status || 404).json({
            error: e.status ? e.message : "Student does not exist!"
        });
    }
}