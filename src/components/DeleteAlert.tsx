import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import { AppContext } from "../Providers/AppProvider";
import { useNavigate } from "react-router";

export const DeleteAlert = () => {
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const navigate = useNavigate();
	const { deleteUser, activeUser } = React.useContext(AppContext);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleDelete = () => {
		!activeUser ? navigate("/login") : deleteUser(activeUser.id),
			setOpen(false);
	};

	return (
		<React.Fragment>
			<Button
				variant="outlined"
				onClick={handleClickOpen}
				sx={{ "&:hover": { backgroundColor: theme.palette.warning.main } }}
			>
				Delete Account
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title" color={theme.palette.primary.main}>
					{"DELETE ACCOUNT?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Once your account has been deleted, all data will be lost. Are you
						sure you wish to delete your account?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>NO!!! Save me from myself!</Button>
					<Button onClick={handleDelete} autoFocus>
						Goodbye cruel world!
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};
