import type { Request, Response } from "express";
import blogModel from "../model/blog.model.js";

export const BlogCreation = async(req:Request,res:Response)=>{
  try {

    const userId = req.userId
    
    const {title,description} = req.body

    const blog = await blogModel.create({
      title:title,
      description:description,
      userId:userId
    })

    return res.status(200).json({
      message:blog.id
    })

  } catch (error) {
    return res.status(500).json({
      message:(error as Error).message,
      error:error
    })
  }
}