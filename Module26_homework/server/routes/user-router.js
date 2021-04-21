import ex from 'express';
const router = ex.Router();
import User from '../models/user.js';

import { checkUser, checkPassword, regNewUser } from '../controllers/reg.js';

//Create one
router.post('/', checkUser, checkPassword, regNewUser);

// Get all
router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.send(users);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

export default router;
