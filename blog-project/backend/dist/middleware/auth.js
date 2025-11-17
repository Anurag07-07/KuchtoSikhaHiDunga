import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        const actualToken = token.split(" ")[1];
        if (!actualToken) {
            return res.status(401).json({ message: "Invalid token format" });
        }
        const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token",
            error: error.message,
        });
    }
};
export default auth;
//# sourceMappingURL=auth.js.map