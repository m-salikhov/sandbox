import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from './constants.js';

export const authMiddleware = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	console.log(req.headers);
	const token = authHeader && authHeader.split(' ')[1];

	if (!token) {
		return res.sendStatus(401);
	}

	jwt.verify(token, ACCESS_TOKEN_SECRET, {}, (err, payload) => {
		if (err) {
			console.log(err);
			return res.sendStatus(403);
		}
		req.payload = payload;
		next();
	});
};
