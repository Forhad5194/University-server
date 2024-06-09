import { Request, Response } from "express"
import { StudendService } from "./student.services";

const createStudent = async(req:Request , res:Response )=> {
   try{
    const {student : studentData} = req.body;

    const result = await StudendService.createStudentIntoDB(studentData)

    res.status(200).json({
        success: true,
        message: "Student created successfully" ,
        data: result
    })
   }catch(err){
    console.log(err);
   }
}




export const studentController = {
    createStudent,
}