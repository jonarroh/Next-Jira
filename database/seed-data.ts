import { Entry } from '../interface';

interface SeedData {
	entries: seedEntry[];
}

interface seedEntry extends Omit<Entry, '_id'> {}

export const seedData: SeedData = {
	entries: [
		{
			description: 'Lorem ipsum dolor sit amet',
			status: 'pending',
			createdAt: Date.now()
		},
		{
			description: 'Lorem ipsum dolor sit amet ilse',
			status: 'finished',
			createdAt: Date.now() - 100000
		},
		{
			description: 'Lorem ipsum dolor sit amet pol',
			status: 'in-progress',
			createdAt: Date.now() - 25000
		}
	]
};
