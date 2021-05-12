import ex from 'express';
const router = ex.Router();

import { checkUser, checkPassword, regNewUser } from '../controllers/reg.js';

//Create one
router.post('/', checkUser, checkPassword, regNewUser);

export default router;
