import React, { useContext, useState } from "react";
import { AppContext } from "../Providers/AppProvider";
import {
	Box,
	Button,
	Stack,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
import { useNavigate } from "react-router";

const AddNoteForm = () => {
	const {} = useContext(AppContext);
	const navigate = useNavigate();
	const theme = useTheme();

	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");

	const reset = () => {
		setTitle("");
		setContent("");
	};

	const handleGearSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		reset();
	};

	const style = {
		position: "absolute" as "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		color: "text.secondary",
		boxShadow: 24,
		p: 4,
	};

	return (
		<Box sx={style} component="form" onSubmit={handleGearSubmit}>
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
				label="content"
				variant="outlined"
				value={content}
				InputProps={{
					sx: { color: theme.palette.text.secondary },
				}}
				onChange={(e) => setContent(e.target.value)}
				required
			/>
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
