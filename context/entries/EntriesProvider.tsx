import { FC, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';
import { entriesApi } from '../../apis';
import { Entry } from '../../interface';

export interface EntriesState {
	entries: Entry[];
	children?: React.ReactNode;
}
const Entries_INITIAL_STATE: EntriesState = {
	entries: []
};

export const EntriesProvider: FC<EntriesState> = ({ children }) => {
	const [state, dispatch] = useReducer(
		entriesReducer,
		Entries_INITIAL_STATE
	);

	const addNewEntry = async (description: string) => {
		try {
			const { data } = await entriesApi.post('/entries', {
				description
			});
			dispatch({ type: '[Entry] Add-Entry', payload: data });
		} catch (error) {
			console.error(error);
		}
	};

	const updateEntry = async ({ _id, status, description }: Entry) => {
		try {
			const { data } = await entriesApi.put<Entry>(
				`/entries/${_id}`,
				{ description, status }
			);
			dispatch({ type: '[Entry] Entry-Updated', payload: data });
		} catch (error) {
			console.log('error en la base de datos');
		}
	};

	const refreshEntries = async () => {
		const { data } = await entriesApi.get<Entry[]>('/entries');
		dispatch({ type: '[Entry] Refresh-Data', payload: data });
	};

	useEffect(() => {
		refreshEntries();
	}, []);

	return (
		<EntriesContext.Provider
			value={{ ...state, addNewEntry, updateEntry }}>
			{children}
		</EntriesContext.Provider>
	);
};
