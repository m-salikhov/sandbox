import ex from 'express';
const router = ex.Router();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

import User from '../models/user.js';

router.post('/', authentication, authorization);

//Это обычно хранится в базе данных
let refreshTokens = [];

async function authentication(req, res, next) {
	await User.findOne(
		{
			email: req.body.email,
		},
		async function (err, user) {
			if (err) {
				return res.status(500).json(err);
			}

			if (user == null) {
				return res.status(200).json('not found');
			}

			if (await bcrypt.compare(req.body.pass, user.pass)) {
				next();
			} else {
				res.json('Not pass');
			}
		}
	);
}

function authorization(req, res) {
	const user = { email: req.body.email };

	const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
	const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
	refreshTokens.push(refreshToken);

	res.json({ accessToken: accessToken, refreshToken: refreshToken });
}

export default router;
