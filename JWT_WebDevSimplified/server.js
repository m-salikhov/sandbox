import dotenv from 'dotenv';
import express from 'express';
import { posts } from './posts.js';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/posts', authToken, (req, res) => {
	res.json(posts.filter((post) => post.username === req.user.name));
});

//Middleware for auth our token.
function authToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) return res.status(401).send('not exist');

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
}

app.listen(PORT, () => console.log(`Work on port ${PORT}`));
