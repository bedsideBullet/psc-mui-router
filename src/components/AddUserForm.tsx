import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AppContext } from "../Providers/AppProvider";

export const AddUserForm = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const theme = useTheme();
	const navigate = useNavigate();
	const { createUser } = useContext(AppContext);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		createUser({
			username,
			password,
		});
	};

	return (
		<Container component="main" maxWidth="xs" sx={{ mb: 7 }}>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					bgcolor: theme.palette.background.paper,
					px: 5,
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
					Sign up
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="username"
								label="Username"
								value={username}
								name="username"
								autoComplete="username"
								onChange={(e) => setUsername(e.target.value)}
								InputProps={{
									sx: { color: theme.palette.text.secondary },
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="text"
								id="password"
								value={password}
								autoComplete="new-password"
								onChange={(e) => setPassword(e.target.value)}
								InputProps={{
									sx: { color: theme.palette.text.secondary },
								}}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign Up
					</Button>
					<Button
						fullWidth
						variant="contained"
						sx={{ mb: 2, bgcolor: theme.palette.secondary.main }}
						onClick={() => navigate(-1)}
					>
						go back
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="/login" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};
