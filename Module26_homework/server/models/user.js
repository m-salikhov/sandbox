import mongoose from 'mongoose';

const subSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	bdayDate: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	passport: {
		type: String,
		required: true,
	},
	passDate: {
		type: String,
		required: true,
	},
	passOrg: {
		type: String,
		required: true,
	},
	passOrgCode: {
		type: String,
		required: true,
	},
	licenseNumber: {
		type: String,
		required: true,
	},
	dateLicense: {
		type: String,
		required: true,
	},
	pass: {
		type: String,
		required: true,
	},
	passRepeat: {
		type: String,
		required: true,
	},
	subDate: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model('User', subSchema);
