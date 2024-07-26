import React, { ChangeEvent, useContext, useState } from "react";
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
import ActiveGear from "./ActiveGear";
import { SteeringGear } from "../types";

interface EditGearFormProps {}

const EditGearForm: React.FC<EditGearFormProps> = () => {
	const [partNumber, setPartNumber] = useState<string>("");
	const [ratio, setRatio] = useState<string>("");
	const [rotation, setRotation] = useState<string>("");
	const [sectorSpline, setSectorSpline] = useState<string>("");
	const [input, setInput] = useState<string>("");
	const [turns, setTurns] = useState<string>("");
	const [tbar, setTbar] = useState<string>("");
	const [mountLocation, setMountLocation] = useState<string>("");
	const [image, setImage] = useState<string>("");

	const { activeSteeringGear, editGear } = useContext(AppContext);
	const navigate = useNavigate();
	const theme = useTheme();

	const defaultImg = "src/assets/images/img_placeholder_2.jpg";

	setImg(defaultImg);

	const reset = () => {
		setPartNumber("");
		setRatio("");
		setRotation("");
		setSectorSpline("");
		setInput("");
		setTurns("");
		setTbar("");
		setMountLocation("");
		setImage(defaultImg);
	};

	const handleGearSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!activeSteeringGear) return;

		const updatedGear: Partial<SteeringGear> = {
			id: activeSteeringGear.id,
			partNumber:
				partNumber.trim() !== "" ? partNumber : activeSteeringGear.partNumber,
			ratio: ratio.trim() !== "" ? ratio : activeSteeringGear.ratio,
			rotation: rotation.trim() !== "" ? rotation : activeSteeringGear.rotation,
			sectorSpline:
				sectorSpline.trim() !== ""
					? sectorSpline
					: activeSteeringGear.sectorSpline,
			input: input.trim() !== "" ? input : activeSteeringGear.input,
			turns: turns.trim() !== "" ? turns : activeSteeringGear.turns,
			tbar: tbar.trim() !== "" ? tbar : activeSteeringGear.tbar,
			mountLocation:
				mountLocation.trim() !== ""
					? mountLocation
					: activeSteeringGear.mountLocation,
			image: image.trim() !== "" ? image : activeSteeringGear.image,
		};

		editGear(updatedGear as SteeringGear)
			.then(() => {
				toast.success("Gear updated successfully");
				reset();
				navigate(-1);
			})
			.catch((error) => {
				toast.error("Failed to update gear");
				console.error(error);
			});
	};

	const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result as string);
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
			<Typography id="edit-gear-modal-title" variant="h6" component="h2">
				Edit Gear
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
					/>
				</Grid>
			</Grid>

			<Stack spacing={1} mt={2}>
				<label htmlFor="edit-input">Choose an image</label>
				<input
					type="file"
					accept="image/*"
					id="edit-input"
					onChange={handleImageUpload}
					style={{ marginTop: theme.spacing(2) }}
				/>
				<Button type="submit" variant="contained" color="primary">
					Save Changes
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => navigate(-1)}
				>
					Cancel
				</Button>
			</Stack>
		</Box>
	);
};

export default EditGearForm;
