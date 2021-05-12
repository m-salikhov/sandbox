import dotenv from 'dotenv';
import express from 'express';
import { posts } from './posts.js';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get('/posts', authToken, (req, res) => {
	res.json(posts.filter((post) => post.username === req.user.name));
});
app.post('/login', (req, res) => {
	//authentication user

	const user = { name: req.body.username };
	const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
	// res.header('authorization', `Bearer ${accessToken}`);
	res.json({ accessToken: accessToken });
});

//test Middleware
function authToken(req, res, next) {
	console.log(req.headers);
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) return res.sendStatus(401);

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
}

app.listen(PORT, () => console.log(`Work on port ${PORT}`));
