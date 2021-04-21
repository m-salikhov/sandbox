import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const PORT = 8080;

app.use(express.json());

//Это обычно хранится в базе данных
let refreshTokens = [];

app.post('/token', (req, res) => {
	const refreshToken = req.body.token;
	if (refreshToken == null) return res.sendStatus(401);
	if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
	jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
		if (err) return res.sendStatus(403);
		const accessToken = generateAccessToken({ name: user.name });
		res.json({ accessToken: accessToken });
	});
});

app.post('/login', (req, res) => {
	// здесь добавить аутетификация из урока про хеширование
	const username = req.body.username;
	const user = { name: username };

	const accessToken = generateAccessToken(user);
	const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
	refreshTokens.push(refreshToken);

	res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

function generateAccessToken(user) {
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1m' });
}

app.listen(PORT, () => console.log(`Work on port ${PORT}`));
