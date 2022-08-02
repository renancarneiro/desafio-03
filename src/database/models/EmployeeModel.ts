import { Schema } from 'mongoose'
import mongoose from "mongoose";

const EmployeeModel = new Schema({
  name: String,
  cpf: String,
  office: String,
  birthday: Number,
  situation: String
},
{
  timestamps: true

})

export default mongoose.model('Employee', EmployeeModel)