import mongoose from 'mongoose';

const subSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	subChannel: {
		type: String,
		required: true,
	},
	subDate: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model('Sub', subSchema);
