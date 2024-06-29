import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { AppContext } from "../Providers/AppProvider";
import { Box, Stack, Typography, Button } from "@mui/material";
import { DeleteAlert } from "./DeleteAlert";

const WelcomePage = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const { activeUser, logOut } = useContext(AppContext);

	return (
		<Box
			sx={{
				padding: theme.spacing(4),
				backgroundColor: theme.palette.background.paper,
				color: theme.palette.text.secondary,
			}}
		>
			<Typography component="h1" variant="h1" gutterBottom>
				Hello, {activeUser ? activeUser.username : `Guest`}
			</Typography>
			<Typography component="h2" variant="h3" gutterBottom>
				Welcome to PSC
			</Typography>

			{activeUser ? (
				<Stack spacing={2}>
					<Button
						variant="contained"
						color="primary"
						onClick={() => navigate("/add-gear")}
					>
						+ Add Gear
					</Button>
					<Button
						variant="contained"
						color="primary"
						onClick={() => navigate("/add-note")}
					>
						+ Add Note
					</Button>
					<Button variant="contained" color="secondary" onClick={logOut}>
						Log Out
					</Button>
					<DeleteAlert />
				</Stack>
			) : (
				<Stack spacing={2}>
					<Button
						variant="contained"
						color="primary"
						onClick={() => navigate("/login")}
					>
						Log In
					</Button>
					<Button
						variant="contained"
						color="primary"
						onClick={() => navigate("/add-user")}
					>
						Sign Up
					</Button>
				</Stack>
			)}
		</Box>
	);
};

export default WelcomePage;
