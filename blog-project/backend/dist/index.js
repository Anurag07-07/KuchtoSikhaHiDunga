import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import db from './database/db.js';
import user from './routes/user.route.js';
const app = express();
app.use(express.json());
app.use(cors());
db();
const PORT = process.env.PORT ?? 3000;
app.use('/api/v1', user);
app.listen(PORT, () => {
    console.log(`Server is started at PORT ${PORT}`);
});
//# sourceMappingURL=index.js.map