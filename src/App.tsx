import "./App.css";
import ActiveGear from "./components/ActiveGear";
import LogInForm from "./components/LogInForm";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<>
			<Navbar>
				<ActiveGear />
				{/* <LogInForm /> */}
			</Navbar>	
		</>
	);
};

export default App;


