import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import PSCThemeProvider from "./Providers/ThemeProvider.tsx";
import { AppProvider } from "./Providers/AppProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AppProvider>
			<PSCThemeProvider>
				<App />
			</PSCThemeProvider>
		</AppProvider>
	</React.StrictMode>
);
