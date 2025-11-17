//username
//password
//email
//createdAt
import mongoose, { Document, Schema } from "mongoose";
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date
    }
});
export default mongoose.model('User', userSchema);
//# sourceMappingURL=user.model.js.map