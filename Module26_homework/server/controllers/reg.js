import User from '../models/user.js';
import bcrypt from 'bcrypt';

export async function checkUser(req, res, next) {
	await User.findOne(
		{
			email: req.body.email,
		},
		function (err, user) {
			if (err) {
				return res.status(500).send(err);
			}

			if (user) {
				return res.status(200).send('Email уже существует в системе');
			}
			next();
		}
	);
}

export function checkPassword(req, res, next) {
	if (req.body.pass !== req.body.passRepeat) {
		return res.status(200).json('Пароль повторен с ошибкой');
	}
	next();
}

export async function regNewUser(req, res) {
	try {
		const hashedPass = await bcrypt.hash(req.body.pass, 10);
		const hashedPassRepeat = await bcrypt.hash(req.body.passRepeat, 10);

		const user = new User({
			name: req.body.name,
			bdayDate: req.body.bdayDate,
			email: req.body.email,
			phone: req.body.phone,
			passport: req.body.passport,
			passDate: req.body.passDate,
			passOrg: req.body.passOrg,
			passOrgCode: req.body.passOrgCode,
			licenseNumber: req.body.licenseNumber,
			dateLicense: req.body.dateLicense,
			pass: hashedPass,
			passRepeat: hashedPassRepeat,
		});
		await user.save();
		res.status(201).json('Вы зарегистрированы!');
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}
