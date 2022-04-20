import {
	Drawer,
	Box,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider
} from '@mui/material';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';
const menuItems: string[] = [
	'Inbox',
	'Starred',
	'Send Email',
	'Drafts'
];

export const Sidebar = () => {
	const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

	return (
		<Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
			<Box sx={{ width: 250 }}>
				<Box sx={{ padding: '5px 10px' }}>
					<Typography variant="h4">Menú</Typography>
				</Box>
				<List>
					{menuItems.map((text, i) => (
						<ListItem key={text} button>
							<ListItemIcon>
								{i % 2 ? <InboxRoundedIcon /> : <MailRoundedIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{menuItems.map((text, i) => (
						<ListItem key={text} button>
							<ListItemIcon>
								{i % 2 ? <InboxRoundedIcon /> : <MailRoundedIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	);
};
