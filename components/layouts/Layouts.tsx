import { Box } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';
import { Navbar, Sidebar } from '../UI';
interface Props {
	title?: string;
	children?: React.ReactNode;
}

export const Layouts: FC<Props> = ({
	title = 'NextJira',
	children
}) => {
	return (
		<Box sx={{ flexFlow: 1 }}>
			<Head>
				<title>{title}</title>
			</Head>
			<Navbar />
			<Sidebar />
			<Box>{children}</Box>
		</Box>
	);
};
