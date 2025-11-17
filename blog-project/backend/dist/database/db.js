import mongoose from 'mongoose';
const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database Connected`);
    }
    catch (error) {
        console.error(error);
        console.log('Database Not Connected');
        process.exit(1);
    }
};
export default db;
//# sourceMappingURL=db.js.map