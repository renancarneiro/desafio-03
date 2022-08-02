import { Schema } from 'mongoose'
import mongoose from "mongoose"

const ProductModel = new Schema({
  name: String,
  category: String,
  price: Number,
},
{
  timestamps: true

})

export default mongoose.model('Product', ProductModel)