import express from 'express';
import jwt from 'jsonwebtoken';
import { authMiddleware } from './authMiddleware.js';
import { ACCESS_TOKEN_LIFE, ACCESS_TOKEN_SECRET } from './constants.js';

const app = express();
const port = 8000;

app.get('/', authMiddleware, (req, res) => {
	const payload = {
		name: 'Jhon',
		role: 'Admin',
	};

	const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
		expiresIn: ACCESS_TOKEN_LIFE,
	});

	try {
		const result = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
		res.send({ result });
	} catch (e) {
		res.status(401).send(e);
	}
});

app.listen(port, () => console.log('listening on 8000'));
