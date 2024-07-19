import { Toaster } from "react-hot-toast";
import "./App.css";
import ActiveGear from "./components/ActiveGear";
import LogInForm from "./components/LogInForm";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import ActiveNote from "./components/ActiveNote";
import AddGearForm from "./components/AddGearForm";
import AddNoteForm from "./components/AddNoteForm";
import { AddUserForm } from "./components/AddUserForm";
import { DeleteAlert } from "./components/DeleteAlert";
import EditGearForm from "./components/EditGearForm";

const App = () => {
	return (
		<Router>
			<>
				<Toaster />
				<Navbar>
					<Routes>
						<Route path="/" element={<WelcomePage />} />
						<Route path="/welcome" element={<WelcomePage />} />
						<Route path="/active-gear" element={<ActiveGear />} />
						<Route path="/add-gear" element={<AddGearForm />} />
						<Route path="/login" element={<LogInForm />} />
						<Route path="/active-note" element={<ActiveNote />} />
						<Route path="/add-note" element={<AddNoteForm />} />
						<Route path="/add-user" element={<AddUserForm />} />
						<Route path="/delete-account" element={<DeleteAlert />} />
						<Route path="/edit-gear/:id" element={<EditGearForm />} />
					</Routes>
				</Navbar>
			</>
		</Router>
	);
};

export default App;
