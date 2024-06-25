// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { useTheme } from "@mui/material/styles";
// import { AppContext } from "../Providers/AppProvider";
// import { useContext } from "react";
// import { Password } from "@mui/icons-material";

// const { logIn } = useContext(AppContext);

// function Copyright(props: any) {
// 	return (
// 		<Typography
// 			variant="body2"
// 			color="text.secondary"
// 			align="center"
// 			{...props}
// 		>
// 			{"Copyright © "}
// 			<Link color="inherit" href="https://mui.com/">
// 				Your Website
// 			</Link>{" "}
// 			{new Date().getFullYear()}
// 			{"."}
// 		</Typography>
// 	);
// }

// export default function SignIn() {
// 	const theme = useTheme();

// 	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// 		event.preventDefault();
// 		const data = new FormData(event.currentTarget);
// 		console.log({
// 			email: data.get("email"),
// 			password: data.get("password"),
// 		});
// 	};

// 	return (
// 		<Container component="main" maxWidth="xs">
// 			<CssBaseline />
// 			<Box
// 				sx={{
// 					marginTop: 8,
// 					display: "flex",
// 					flexDirection: "column",
// 					alignItems: "center",
// 					backgroundColor: theme.palette.background.default,
// 					padding: 3,
// 					borderRadius: 1,
// 				}}
// 			>
// 				<Avatar sx={{ m: 1, bgcolor: theme.palette.primary.main }}>
// 					<LockOutlinedIcon />
// 				</Avatar>
// 				<Typography component="h1" variant="h5">
// 					Sign in
// 				</Typography>
// 				<Box component="form" onSubmit={() => logIn(userName, Password)} noValidate sx={{ mt: 1 }}>
// 					<TextField
// 						margin="normal"
// 						required
// 						fullWidth
// 						id="username"
// 						label="Username"
// 						name="username"
// 						autoComplete="username"
// 						autoFocus
// 						sx={{
// 							bgcolor: theme.palette.secondary.dark,
// 							color: theme.palette.primary.main,
// 						}}
// 						InputLabelProps={{
// 							style: {
// 								color: theme.palette.primary.main,
// 							},
// 						}}
// 					/>
// 					<TextField
// 						margin="normal"
// 						required
// 						fullWidth
// 						name="password"
// 						label="Password"
// 						type="password"
// 						id="password"
// 						autoComplete="current-password"
// 						sx={{
// 							bgcolor: theme.palette.secondary.dark,
// 							color: theme.palette.primary.main,
// 						}}
// 						InputLabelProps={{
// 							style: { color: theme.palette.primary.main },
// 						}}
// 					/>
// 					<Button
// 						type="submit"
// 						fullWidth
// 						variant="contained"
// 						sx={{ mt: 3, mb: 2, bgcolor: theme.palette.primary.main }}
// 					>
// 						Sign In
// 					</Button>
// 					<Grid container>
// 						<Grid item xs>
// 							<Link
// 								href="#"
// 								variant="body2"
// 								sx={{ color: theme.palette.primary.main }}
// 							>
// 								Forgot password?
// 							</Link>
// 						</Grid>
// 						<Grid item>
// 							<Link
// 								href="#"
// 								variant="body2"
// 								sx={{ color: theme.palette.primary.main }}
// 							>
// 								{"Don't have an account? Sign Up"}
// 							</Link>
// 						</Grid>
// 					</Grid>
// 				</Box>
// 			</Box>
// 			<Copyright sx={{ mt: 8, mb: 4, color: theme.palette.text.primary }} />
// 		</Container>
// 	);
// }

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
import { AppContext } from "../Providers/AppProvider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";

function Copyright(props: any) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function SignIn() {
	const [userName, setUserName] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const theme = useTheme();
	const { logIn } = useContext(AppContext);
	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		logIn(userName, password);
		navigate("/");
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					backgroundColor: theme.palette.background.default,
					padding: 3,
					borderRadius: 1,
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: theme.palette.primary.main }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="userName"
						label="UserName"
						name="userName"
						autoComplete="userName"
						onChange={(e) => setUserName(e.target.value)}
						autoFocus
						sx={{
							bgcolor: theme.palette.secondary.dark,
							color: theme.palette.primary.main,
						}}
						InputLabelProps={{
							style: {
								color: theme.palette.primary.main,
							},
						}}
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
						sx={{
							bgcolor: theme.palette.secondary.dark,
							color: theme.palette.primary.main,
						}}
						InputLabelProps={{
							style: { color: theme.palette.primary.main },
						}}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2, bgcolor: theme.palette.primary.main }}
					>
						Sign In
					</Button>
					<Button
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2, bgcolor: theme.palette.primary.main }}
						onClick={() => navigate("/")}
					>
						Cancel
					</Button>
					<Grid container>
						<Grid item xs>
							<Link
								href="#"
								variant="body2"
								sx={{ color: theme.palette.primary.main }}
							>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link
								href="#"
								variant="body2"
								sx={{ color: theme.palette.primary.main }}
							>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 8, mb: 4, color: theme.palette.text.primary }} />
		</Container>
	);
}
