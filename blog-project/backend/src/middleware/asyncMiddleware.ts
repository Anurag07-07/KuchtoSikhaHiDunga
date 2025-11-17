import type { NextFunction, Request,Response } from "express"

export const wrap = (fn:any)=>(req:Request,res:Response,next:NextFunction)=>{
  Promise.resolve(fn(req,res,next)).catch(next)
}