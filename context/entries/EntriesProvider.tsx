import { FC, useReducer } from 'react';
import { Entry } from '../../interface';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
	entries: Entry[];
	children?: React.ReactNode;
}
const Entries_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuidv4(),
			description: 'Lorem ipsum dolor sit amet',
			status: 'pending',
			createdAt: Date.now()
		},
		{
			_id: uuidv4(),
			description: 'Lorem ipsum dolor sit amet ilse',
			status: 'finished',
			createdAt: Date.now() - 100000
		},
		{
			_id: uuidv4(),
			description: 'Lorem ipsum dolor sit amet pol',
			status: 'in-progress',
			createdAt: Date.now() - 25000
		}
	]
};

export const EntriesProvider: FC<EntriesState> = ({ children }) => {
	const [state, dispatch] = useReducer(
		entriesReducer,
		Entries_INITIAL_STATE
	);

	const addNewEntry = (description: string) => {
		const newEntry: Entry = {
			_id: uuidv4(),
			description,
			createdAt: Date.now(),
			status: 'pending'
		};
		dispatch({ type: '[Entry] Add-Entry', payload: newEntry });
	};
	const updateEntry = (entry: Entry) => {
		dispatch({ type: '[Entry] Entry-Updated', payload: entry });
	};

	return (
		<EntriesContext.Provider
			value={{ ...state, addNewEntry, updateEntry }}>
			{children}
		</EntriesContext.Provider>
	);
};
