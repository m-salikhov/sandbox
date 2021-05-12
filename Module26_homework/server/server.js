import dotenv from 'dotenv';
import ex from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user-router.js';
import valRouter from './routes/val-router.js';
import User from './models/user.js';
import jwt from 'jsonwebtoken';

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

app.use('/reg', userRouter);
app.use('/val', valRouter);

//Для проверки работы верификации
app.get('/users', authToken, async (req, res) => {
	try {
		const users = await User.find();
		res.send(users);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

function authToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token === 'null') return res.sendStatus(401);

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) return res.status(403).send('Not verify');
		req.user = user;
		next();
	});
}

app.listen(port, () => console.log('Work! test2'));
