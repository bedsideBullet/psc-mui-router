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
					image: defaultImg,
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
		<Box sx={style} component="form" onSubmit={handleGearSubmit} mt={5}>
			<Typography id="add-gear-modal-title" variant="h6" component="h2">
				+ Add New Gear
			</Typography>
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

export default AddGearForm;
