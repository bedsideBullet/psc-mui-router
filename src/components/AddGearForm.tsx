import React, { useContext, useState } from "react";
import { AppContext } from "../Providers/AppProvider";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const AddGearForm = () => {
	const [partNumber, setPartNumber] = useState<string>("");
	const [ratio, setRatio] = useState<string>("");
	const [rotation, setRotation] = useState<string>("");
	const [sectorSpline, setSectorSpline] = useState<string>("");
	const [input, setInput] = useState<string>("");
	const [mountLocation, setMountLocation] = useState<string>("");
	const [direction, setDirection] = useState<string>("");

	const { setDisplayCreateForm, createGear } = useContext(AppContext);
	const navigate = useNavigate();

	const defaultImg = "src/assets/images/img_placeholder_2.jpg";

	const reset = () => {
		setPartNumber("");
		setRatio("");
		setRotation("");
		setSectorSpline("");
		setInput("");
		setMountLocation("");
		setDirection("");
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		createGear({
			image: defaultImg,
			partNumber,
			ratio,
			rotation,
			sectorSpline,
			input,
			mountLocation,
			direction,
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
		<Box sx={style} component="form" onSubmit={handleSubmit}>
			<Typography id="add-gear-modal-title" variant="h6" component="h2">
				+ Add New Gear
			</Typography>
			<TextField
				margin="normal"
				fullWidth
				label="Part Number"
				variant="outlined"
				value={partNumber}
				onChange={(e) => setPartNumber(e.target.value)}
				required
			/>
			<TextField
				margin="normal"
				fullWidth
				label="Input"
				variant="outlined"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				required
			/>
			<TextField
				margin="normal"
				fullWidth
				label="Ratio"
				variant="outlined"
				value={ratio}
				onChange={(e) => setRatio(e.target.value)}
				required
			/>
			<TextField
				margin="normal"
				fullWidth
				label="Rotation"
				variant="outlined"
				value={rotation}
				onChange={(e) => setRotation(e.target.value)}
				required
			/>
			<TextField
				margin="normal"
				fullWidth
				label="Mount Location"
				variant="outlined"
				value={mountLocation}
				onChange={(e) => setMountLocation(e.target.value)}
				required
			/>
			<TextField
				margin="normal"
				fullWidth
				label="Sector Spline"
				variant="outlined"
				value={sectorSpline}
				onChange={(e) => setSectorSpline(e.target.value)}
				required
			/>
			<TextField
				margin="normal"
				fullWidth
				label="Pitman Arm Direction"
				variant="outlined"
				value={direction}
				onChange={(e) => setDirection(e.target.value)}
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
