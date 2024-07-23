import React, { useContext, useState } from "react";
import { AppContext } from "../Providers/AppProvider";
import {
	Box,
	Button,
	Grid,
	Stack,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const AddGearForm = () => {
	const [partNumber, setPartNumber] = useState<string>("");
	const [ratio, setRatio] = useState<string>("");
	const [rotation, setRotation] = useState<string>("");
	const [sectorSpline, setSectorSpline] = useState<string>("");
	const [input, setInput] = useState<string>("");
	const [turns, setTurns] = useState<string>("");
	const [tbar, setTbar] = useState<string>("");
	const [mountLocation, setMountLocation] = useState<string>("");
	const [img, setImg] = useState<string>("");

	const { createGear, activeUser } = useContext(AppContext);
	const navigate = useNavigate();
	const theme = useTheme();

	const defaultImg = "src/assets/images/img_placeholder_2.jpg";

	const reset = () => {
		setPartNumber("");
		setRatio("");
		setRotation("");
		setSectorSpline("");
		setInput("");
		setTurns("");
		setTbar("");
		setMountLocation("");
		setImg(defaultImg);
	};

	const handleGearSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		!activeUser
			? toast.error("Log in to add a note")
			: createGear({
					image: img,
					partNumber,
					ratio,
					rotation,
					sectorSpline,
					input,
					turns,
					tbar,
					mountLocation,
			  });
		reset();
	};

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImg(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const style = {
		width: 800,
		bgcolor: "background.paper",
		color: "text.secondary",
		boxShadow: 24,
		p: 4,
		mt: 0,
	};

	return (
		<Box sx={style} component="form" onSubmit={handleGearSubmit} mt={5}>
			<Typography id="add-gear-modal-title" variant="h6" component="h2">
				+ Add New Gear
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<TextField
						margin="normal"
						fullWidth
						label="Part Number"
						variant="outlined"
						value={partNumber}
						InputProps={{
							sx: { color: theme.palette.text.secondary },
						}}
						onChange={(e) => setPartNumber(e.target.value)}
						required
					/>
					<TextField
						margin="normal"
						fullWidth
						label="Ratio"
						variant="outlined"
						value={ratio}
						InputProps={{
							sx: { color: theme.palette.text.secondary },
						}}
						onChange={(e) => setRatio(e.target.value)}
						required
					/>
					<TextField
						margin="normal"
						fullWidth
						label="Rotation"
						variant="outlined"
						value={rotation}
						InputProps={{
							sx: { color: theme.palette.text.secondary },
						}}
						onChange={(e) => setRotation(e.target.value)}
						required
					/>
					<TextField
						margin="normal"
						fullWidth
						label="Sector Spline"
						variant="outlined"
						value={sectorSpline}
						InputProps={{
							sx: { color: theme.palette.text.secondary },
						}}
						onChange={(e) => setSectorSpline(e.target.value)}
						required
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						margin="normal"
						fullWidth
						label="Input"
						variant="outlined"
						value={input}
						InputProps={{
							sx: { color: theme.palette.text.secondary },
						}}
						onChange={(e) => setInput(e.target.value)}
						required
					/>
					<TextField
						margin="normal"
						fullWidth
						label="Turns lock-to-lock"
						variant="outlined"
						value={turns}
						InputProps={{
							sx: { color: theme.palette.text.secondary },
						}}
						onChange={(e) => setTurns(e.target.value)}
						required
					/>
					<TextField
						margin="normal"
						fullWidth
						label="T-Bar"
						variant="outlined"
						value={tbar}
						InputProps={{
							sx: { color: theme.palette.text.secondary },
						}}
						onChange={(e) => setTbar(e.target.value)}
						required
					/>
					<TextField
						margin="normal"
						fullWidth
						label="Mount Location"
						variant="outlined"
						value={mountLocation}
						InputProps={{
							sx: { color: theme.palette.text.secondary },
						}}
						onChange={(e) => setMountLocation(e.target.value)}
						required
					/>
				</Grid>
			</Grid>

			<Stack spacing={1} mt={2}>
				<label htmlFor="input">Choose an image</label>
				<input
					type="file"
					accept="image/*"
					onChange={handleImageUpload}
					style={{ marginTop: theme.spacing(2), marginLeft: 280 }}
				/>
				<Button type="submit" variant="contained" color="primary">
					+Add Gear
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

export default AddGearForm;
