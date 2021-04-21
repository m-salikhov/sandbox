import ex from 'express';
const router = ex.Router();
import Sub from '../models/sub.js';
import { checkSub, createNewSub } from '../controllers/post.js';

// Get all
router.get('/', async (req, res) => {
	try {
		const subs = await Sub.find();
		res.send(subs);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

//Get one
router.get('/:id', getSub, async (req, res) => {
	res.json(res.sub);
});

//Create one
router.post('/', checkSub, createNewSub);

//Update one
router.patch('/:id', getSub, async (req, res) => {
	if (req.body.name != null) {
		res.sub.name = req.body.name;
	}
	if (req.body.subChannel != null) {
		res.sub.subChannel = req.body.subChannel;
	}
	try {
		const updateSub = await res.sub.save();
		res.json(updateSub);
	} catch (err) {
		res.status(400).json({ mesaage: err.message });
	}
});

//Del one
router.delete('/:id', getSub, async (req, res) => {
	try {
		await res.sub.remove();
		res.json({ message: 'sub was deleted' });
	} catch (err) {
		res.status(500).json({ mesaage: err.message });
	}
});

//Middleware
async function getSub(req, res, next) {
	let sub;
	try {
		sub = await Sub.findById(req.params.id);
		if (sub == null) {
			return res.status(404).json({ message: 'cant find sub' });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.sub = sub;

	next();
}

//Mid checkSub

// function checkSub(req, res, next) {
// 	Sub.findOne(
// 		{
// 			name: req.body.name,
// 		},
// 		function (err, sub) {
// 			if (err) {
// 				return res.status(500).send(err);
// 			}

// 			if (sub) {
// 				return res.status(200).send('Exist');
// 			}
// 			next();
// 		}
// 	);
// }

export default router;
