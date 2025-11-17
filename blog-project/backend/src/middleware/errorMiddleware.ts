import type { NextFunction, Request, Response } from "express";

export const errorMiddleware = (req:Request,res:Response,next:NextFunction,err:any)=>{
  console.log(err.stack);
  return res.status(500).json({
    message:err.message
  })
}