import React, { useContext } from "react";
import { SteeringGear } from "../types";
import toast from "react-hot-toast";
import { AppContext } from "../Providers/AppProvider";
import {
	Container,
	Box,
	Typography,
	Button,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const ActiveGear: React.FC = () => {
	const { activeSteeringGear, noteDisplay, setDisplayNotesForm } =
		useContext(AppContext);
	const theme = useTheme();
	const copyStateToClipboard = (state: SteeringGear) => {
		const stateString = JSON.stringify(state, null, 2);
		navigator.clipboard
			.writeText(stateString)
			.then(() => {
				toast.success("Gear Data copied to clipboard!");
			})
			.catch((err) => {
				toast.error("Could not copy text: " + err);
			});
	};

	return (
		<Container
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<Box
				display="flex"
				flexDirection="row"
				alignItems="center"
				justifyContent="space-between"
				gap={12}
				sx={{ flexGrow: 1 }}
			>
				<Box
					className="image-container"
					textAlign="center"
					mb={2}
					sx={{ flexGrow: 1 }}
				>
					<img
						src={activeSteeringGear?.image}
						alt={"Steering Gear Image"}
						style={{ maxWidth: "300px" }}
					/>
					<Box mt={2}>
						<Typography variant="h5">Notes</Typography>
						<Button
							variant="contained"
							color="primary"
							onClick={() => setDisplayNotesForm(true)}
						>
							{noteDisplay()}
						</Button>
					</Box>
				</Box>
				<Box className="gear-details" textAlign="center" sx={{ flexGrow: 2 }}>
					<Typography variant="h4" gutterBottom>
						{activeSteeringGear?.partNumber}
					</Typography>
					<Box
						className="info-wrapper"
						mt={2}
						sx={{ backgroundColor: theme.palette.text.secondary, padding: 2 }}
					>
						<List>
							<ListItem>
								<ListItemText primary={`Input: ${activeSteeringGear?.input}`} />
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`Rotation: ${activeSteeringGear?.rotation}`}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`Mount Location: ${activeSteeringGear?.mountLocation}`}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`Pitman Arm Direction: ${activeSteeringGear?.direction}`}
								/>
							</ListItem>
							<ListItem>
								<ListItemText primary={`Ratio: ${activeSteeringGear?.ratio}`} />
							</ListItem>
							<ListItem>
								<ListItemText
									primary={`Sector Spline: ${activeSteeringGear?.sectorSpline}`}
								/>
							</ListItem>
						</List>
						<Button
							variant="contained"
							color="primary"
							onClick={() => {
								activeSteeringGear
									? copyStateToClipboard(activeSteeringGear)
									: toast.error("Nothing to copy");
							}}
						>
							<strong>Copy</strong>
						</Button>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default ActiveGear;
