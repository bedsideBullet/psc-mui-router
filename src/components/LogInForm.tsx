import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { AppContext } from "../Providers/AppProvider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Stack } from "@mui/material";

export default function SignIn() {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const theme = useTheme();
	const { logIn } = useContext(AppContext);
	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		logIn(username, password);
		navigate("/welcome");
	};

	return (
		<Container component="main" maxWidth="xs" sx={{ mb: 5 }}>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					backgroundColor: theme.palette.background.paper,
					padding: 3,
					borderRadius: 1,
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "secondary.dark" }}>
					<LockOutlinedIcon color="primary" />
				</Avatar>
				<Typography
					component="h1"
					variant="h5"
					sx={{ color: theme.palette.text.secondary }}
				>
					Sign in
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						autoComplete="username"
						onChange={(e) => setUsername(e.target.value)}
						InputProps={{
							sx: { color: theme.palette.text.secondary },
						}}
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={(e) => setPassword(e.target.value)}
						InputProps={{
							sx: { color: theme.palette.text.secondary },
						}}
					/>
					<Stack spacing={2} pt={3}>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2, bgcolor: theme.palette.primary.main }}
						>
							Sign In
						</Button>
						<Button
							type="button"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2, bgcolor: theme.palette.primary.main }}
							onClick={() => navigate("/add-user")}
						>
							Sign up
						</Button>
						<Button
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2, bgcolor: theme.palette.secondary.main }}
							onClick={() => navigate(-1)}
						>
							Cancel
						</Button>
					</Stack>
				</Box>
			</Box>
		</Container>
	);
}
