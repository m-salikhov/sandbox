import express from 'express';
const app = express();

let users = [
	{
		name: 'Alex',
		email: 'example-alex.@gmail.com',
	},
	{
		name: 'Maks',
		email: 'example-maks.@gmail.com',
	},
];

app.use(express.json());

// app.get('/reg', (reg, res) => res.send(users));

app.post('/reg', concatUser, (req, res) => {
	// users = users.concat(req.body);
	console.log(users);
	res.send(users);
});

function concatUser(req, res, next) {
	users = users.concat(req.body);
	next();
}

app.listen(5000, () => console.log('server is running'));
