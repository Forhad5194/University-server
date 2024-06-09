import { Schema, model } from "mongoose";
import { Guardian, LocalGuardian, Student, UserName } from "./student.interface";

const userNameSchema =  new Schema <UserName>({
    
        firstName:{
            type: String,
            required: true,
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required: true,
        },
    
});

const guardianSchema = new Schema <Guardian>({
    fatherName: {
        type: String,
        required: true,
    },
    fatherOccupation: {
        type: String,
        required: true,
    },
    fatherContactNo: {
        type: String,
        required: true,
    },
    MotherName : {
        type: String,
        required: true,
    },
    MotherOccupation : {
        type: String,
        required: true,
    },
    MotherContactNo : {
        type: String,
        required: true,
    },
});


const localGuardianSchema = new Schema <LocalGuardian>({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});








const studentSchema = new Schema <Student> ({
    id: {type: String},
    name :userNameSchema,
    dateOfBirth: {type: String},
    gender: ["male", "female"],
    email : {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    emergencyContactNumber: {
        type: String,
        required: true,
    },
    bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
    guardian : guardianSchema,
    localGuardian :localGuardianSchema,
    profileImg: {
        type: String,
    },
    isActive : ["active", "blocked"]

})




export const StudentModel = model<Student>("Student", studentSchema)