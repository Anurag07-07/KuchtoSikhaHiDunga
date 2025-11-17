import mongoose, { Document, Types } from "mongoose";
export interface IBlog extends Document {
    title: string;
    description: string;
    userId: Types.ObjectId;
    createdAt: Date;
}
declare const _default: mongoose.Model<IBlog, {}, {}, {}, mongoose.Document<unknown, {}, IBlog, {}, {}> & IBlog & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=blog.model.d.ts.map