import dotenv from 'dotenv';
import ex from 'express';
import mongoose from 'mongoose';
import subsRouter from './routes/subs-route.js';

dotenv.config();

const app = ex();
const port = 5000;

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connecting to dataBase'));

app.use(ex.json());

app.use('/subs', subsRouter);

app.listen(port, () => console.log('Work! test2'));
