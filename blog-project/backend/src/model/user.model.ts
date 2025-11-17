//username
//password
//email
//createdAt
import mongoose, { Document,Schema } from "mongoose";

export interface IUser extends Document{
  username:string,
  password:string
  email:string
  createdAt:Date
}

const userSchema:Schema = new Schema({
  username:{
    type:String,
    required:true,
    unique:true,
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    select:false
  },
  createdAt:{
    type:Date
  }
})

export default mongoose.model<IUser>('User',userSchema)