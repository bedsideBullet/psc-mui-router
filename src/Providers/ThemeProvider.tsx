import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ca2328", // red
		},
		secondary: {
			main: "#343a40", // grey
		},
		background: {
			default: "#000", // black
			paper: "#fff", // white
		},
		text: {
			primary: "#fff", // white
			secondary: "#000", // black
		},
	},
	typography: {
		fontFamily: "Arial, Helvetica, sans-serif",
		h1: {
			fontSize: "3rem",
		},
		button: {
			textTransform: "none",
		},
	},
});

const PSCThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default PSCThemeProvider;
