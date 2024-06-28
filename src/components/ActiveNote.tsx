import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppContext } from "../Providers/AppProvider";
import { useContext } from "react";
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router";

const ActiveNote = () => {
	const { activeNote, allGears, setToActive } = useContext(AppContext);
	const navigate = useNavigate();

	const noteGear = allGears.find(
		(gear) => String(gear.id) === String(activeNote?.gearId)
	);

	const handleButtonClick = () => {
		if (noteGear) {
			setToActive(noteGear);
			navigate("/active-gear");
		}
	};

	return (
		<Card
			sx={{
				minWidth: 750,
				minHeight: 400,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<CardContent>
				<Typography
					variant="h3"
					component="div"
					color="text.secondary"
					gutterBottom
				>
					{activeNote?.title}
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						minHeight: 200,
					}}
				>
					<Typography variant="h6" color="text.secondary">
						{activeNote?.content}
					</Typography>
				</Box>
			</CardContent>
			<CardActions>
				<Stack direction="row" spacing={1} alignItems="center">
					<Typography variant="subtitle1" color="text.secondary">
						Part:
					</Typography>
					<Button size="small" onClick={handleButtonClick}>
						{noteGear ? noteGear.partNumber : "No related part"}
					</Button>
				</Stack>
			</CardActions>
		</Card>
	);
};

export default ActiveNote;
