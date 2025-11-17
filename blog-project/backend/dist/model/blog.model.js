//title
//description
//userId
//createdAt
import mongoose, { Document, Schema, Types } from "mongoose";
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date
    }
});
export default mongoose.model('Blog', BlogSchema);
//# sourceMappingURL=blog.model.js.map