import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppContext } from "../Providers/AppProvider";
import { useContext } from "react";
import { Stack } from "@mui/material";

const ActiveNote = () => {
	const { activeNote, allGears } = useContext(AppContext);

	const noteGear = allGears.filter(
		(gear) => String(gear.id) === String(activeNote?.gearId)
	);

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
					<Button size="small" onClick={() => console.log(noteGear)}>
						{noteGear.length > 0 ? noteGear[0].partNumber : "No matching gear"}
					</Button>
				</Stack>
			</CardActions>
		</Card>
	);
};

export default ActiveNote;
