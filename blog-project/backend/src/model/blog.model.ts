//title
//description
//userId
//createdAt

import mongoose,{Document,Schema, Types} from "mongoose";

export interface IBlog extends Document{
  title:string,
  description:string
  userId:Types.ObjectId
  createdAt:Date
}

const BlogSchema:Schema = new Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  createdAt:{
    type:Date
  }
})

export default mongoose.model<IBlog>('Blog',BlogSchema)