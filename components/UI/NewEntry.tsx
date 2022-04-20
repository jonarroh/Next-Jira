import { ChangeEvent, useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Add from '@mui/icons-material/AddCircleOutlineRounded';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';
export const NewEntry = () => {
	const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);
	const [inputValue, setInputValue] = useState('');
	const [touch, setTouch] = useState(false);

	const onTextChanged = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};
	const { addNewEntry } = useContext(EntriesContext);
	const onSave = () => {
		if (inputValue.length === 0) return;

		addNewEntry(inputValue);
		setInputValue('');
		setIsAddingEntry(false);
		setTouch(false);
	};

	return (
		<Box sx={{ marginBottom: 2, paddingX: 2 }}>
			{isAddingEntry ? (
				<>
					<TextField
						fullWidth
						sx={{ marginTop: 2, marginBottom: 1 }}
						placeholder="Agrega una nueva entrada"
						autoFocus
						multiline
						label="Entrada nueva"
						helperText={
							inputValue.length <= 0 &&
							touch &&
							'Prueba poniendo: Dominar el mundo'
						}
						error={inputValue.length <= 0 && touch}
						value={inputValue}
						onChange={onTextChanged}
						onBlur={() => setTouch(true)}
					/>

					<Box display="flex" justifyContent="space-around">
						<Button
							color="secondary"
							variant="outlined"
							endIcon={<SaveRoundedIcon />}
							onClick={onSave}>
							Guardar
						</Button>
						<Button
							color="secondary"
							variant="contained"
							endIcon={<CancelRoundedIcon />}
							onClick={() => setIsAddingEntry(false)}>
							Cancelar
						</Button>
					</Box>
				</>
			) : (
				<Button
					startIcon={<Add />}
					variant="outlined"
					onClick={() => setIsAddingEntry(true)}>
					Agregar Tarea
				</Button>
			)}
		</Box>
	);
};
