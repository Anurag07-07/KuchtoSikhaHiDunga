import userModel from "../model/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const Signup = async (req, res) => {
    try {
        //Get the data from the body
        const { username, password, email } = req.body;
        const present = await userModel.findOne({
            username
        });
        if (present) {
            return res.status(403).json({
                message: `User Already Present`
            });
        }
        const salt = await bcrypt.genSalt();
        const hashpassword = await bcrypt.hash(password, salt);
        const user = await userModel.create({
            username,
            password: hashpassword,
            email
        });
        return res.status(200).json({
            message: `User Created Succesfully`,
            user: user
        });
    }
    catch (error) {
        return res.status(500).json({
            message: `Internal Server Error`,
            error: error
        });
    }
};
export const Signin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const check = await userModel.findOne({ username }).select("+password");
        if (!check) {
            return res.status(403).json({
                message: `User Not Present`
            });
        }
        const match_password = await bcrypt.compare(password, check.password);
        if (match_password) {
            //Create Token
            const token = jwt.sign({
                id: check._id?.toString()
            }, process.env.JWT_SECRET, { expiresIn: '1h' });
            if (!token) {
                return res.status(400).json({
                    message: `Token Not Created`
                });
            }
            else {
                return res.status(200).json({
                    token: token,
                    message: `Token Created Successfully`
                });
            }
        }
        else {
            return res.status(400).json({
                message: `Password Don't Match`
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
            error: error
        });
    }
};
//# sourceMappingURL=user.controller.js.map