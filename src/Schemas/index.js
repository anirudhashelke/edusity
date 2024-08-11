import * as  Yup from "yup"

export const  signUpSchemas=Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter Your Name"),
    number:Yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits').required("Please Enter Your Number"),
    message:Yup.string().min(5).required("Please Enter Your Message"),
})