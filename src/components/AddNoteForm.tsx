import React, { useContext, useState } from "react";
import { AppContext } from "../Providers/AppProvider";
import {
	Box,
	Button,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const AddNoteForm = () => {
	const { allGears, createNote, activeUser } = useContext(AppContext);
	const navigate = useNavigate();
	const theme = useTheme();

	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");
	const [gearId, setGearId] = useState<number | null>(null);

	const reset = () => {
		setTitle("");
		setContent("");
		setGearId(null);
	};

	const handleNoteSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (!activeUser) {
			toast.error("Log in to add a note");
		} else if (gearId === null) {
			toast.error("Please select a related part");
		} else {
			createNote({
				title,
				content,
				gearId,
				userId: activeUser.id,
			});
			reset();
		}
	};

	const style = {
		width: 400,
		bgcolor: "background.paper",
		color: "text.secondary",
		boxShadow: 24,
		p: 4,
	};

	return (
		<Box sx={style} component="form" onSubmit={handleNoteSubmit}>
			<Typography id="add-note-modal-title" variant="h6" component="h2">
				+ Add New Note
			</Typography>
			<TextField
				margin="normal"
				fullWidth
				label="Title"
				variant="outlined"
				value={title}
				InputProps={{
					sx: { color: theme.palette.text.secondary },
				}}
				onChange={(e) => setTitle(e.target.value)}
				required
			/>
			<TextField
				margin="normal"
				fullWidth
				label="Note"
				variant="outlined"
				value={content}
				multiline
				rows={4}
				InputProps={{
					sx: { color: theme.palette.text.secondary },
				}}
				onChange={(e) => setContent(e.target.value)}
				required
			/>
			<InputLabel id="related-part-label">Related Part</InputLabel>
			<Select
				labelId="related-part-label"
				label="Related Part"
				value={gearId}
				fullWidth
				color="primary"
				sx={{ color: theme.palette.text.secondary, mb: 2 }}
				onChange={(e) => setGearId(e.target.value)}
			>
				{allGears.map((gear) => (
					<MenuItem
						key={gear.id}
						value={gear.id}
						sx={{ color: theme.palette.text.secondary }}
					>
						{gear.partNumber}
					</MenuItem>
				))}
			</Select>
			<Stack spacing={1}>
				<Button type="submit" variant="contained" color="primary">
					+
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => navigate(-1)}
				>
					Go Back
				</Button>
			</Stack>
		</Box>
	);
};

export default AddNoteForm;
