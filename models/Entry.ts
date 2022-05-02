import moongose, { Model, Schema } from 'mongoose';
import { Entry } from '../interface';

export interface IEntry extends Entry {}

const entrySchema = new Schema({
	description: { type: String },
	createdAt: { type: Number },
	status: {
		type: String,
		enum: {
			values: ['pending', 'in-progress', 'finished'],
			message: '{VALUE} no es un estado',
			default: 'pending'
		}
	}
});

const EntryModel: Model<IEntry> =
	moongose.models.Entry || moongose.model('Entry', entrySchema);

export default EntryModel;
