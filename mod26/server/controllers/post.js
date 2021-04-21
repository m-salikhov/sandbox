// import ex from 'express';
import Sub from '../models/sub.js';

export async function checkSub(req, res, next) {
	await Sub.findOne(
		{
			name: req.body.name,
		},
		function (err, sub) {
			if (err) {
				return res.status(500).send(err);
			}

			if (sub) {
				return res.status(200).send('Exist');
			}
			next();
		}
	);
}

export async function createNewSub(req, res) {
	const sub = new Sub({
		name: req.body.name,
		subChannel: req.body.subChannel,
	});

	try {
		const newSub = await sub.save();
		res.status(201).json(newSub);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}
