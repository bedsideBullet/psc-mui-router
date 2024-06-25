import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ca2328", // Your primary color
		},
		secondary: {
			main: "#343a40", // Your secondary color
		},
		background: {
			default: "#000", // Background color for the entire app
			paper: "#fff", // Background color for components
		},
		text: {
			primary: "#fff", // Text color for primary text
			secondary: "#000", // Text color for secondary text
		},
	},
	typography: {
		fontFamily: "Arial, Helvetica, sans-serif", // Your font family
		h1: {
			fontSize: "3rem", // Custom font size for h1
		},
		button: {
			textTransform: "none", // Disable uppercase transformation for buttons
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
