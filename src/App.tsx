import { Toaster } from "react-hot-toast";
import "./App.css";
import ActiveGear from "./components/ActiveGear";
import LogInForm from "./components/LogInForm";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import ActiveNote from "./components/ActiveNote";

const App = () => {
	return (
		<Router>
			<>
				<Toaster />
				<Navbar>
					<Routes>
						<Route path="/" element={<ActiveGear />} />
						<Route path="/login" element={<LogInForm />} />
						<Route path="/welcome" element={<WelcomePage />} />
						<Route path="/active-note" element={<ActiveNote />} />
					</Routes>
				</Navbar>
			</>
		</Router>
	);
};

export default App;
