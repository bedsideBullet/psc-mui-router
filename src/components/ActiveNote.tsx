import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppContext } from "../Providers/AppProvider";
import { useContext } from "react";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router";

const ActiveNote = () => {
	const { activeNote, allGears, setToActive } = useContext(AppContext);
	const navigate = useNavigate()

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
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography variant="h5" component="div" color="text.secondary">
					{activeNote?.title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{activeNote?.content}
				</Typography>
			</CardContent>
			<CardActions>
				<Stack direction="row">
					<Typography variant="subtitle1" color="text.secondary">
						Part:
					</Typography>
					<Button size="small" onClick={handleButtonClick}>
						{noteGear ? noteGear.partNumber : "No related part" }
					</Button>
				</Stack>
			</CardActions>
		</Card>
	);
};

export default ActiveNote;
