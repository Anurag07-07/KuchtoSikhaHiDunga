import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()
interface JwtPayload {
  id: string;
}

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const actualToken = token.split(" ")[1];
    if (!actualToken) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const decoded = jwt.verify(
      actualToken,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
      error: (error as Error).message,
    });
  }
};

export default auth;
