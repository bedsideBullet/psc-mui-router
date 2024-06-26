import { createContext, ReactNode, useEffect, useState } from "react";
import { Note, SteeringGear, TAppContext, User } from "../types";
import { Requests } from "../api";
import toast from "react-hot-toast";

export const AppContext = createContext<TAppContext>({} as TAppContext);

export const AppProvider = ({ children }: { children: ReactNode }) => {
	const [allGears, setAllGears] = useState<SteeringGear[]>([]);
	const [activeUser, setActiveUser] = useState<User | null>(null);
	const [users, setUsers] = useState<User[]>([]);
	const [displayLoginForm, setDisplayLoginForm] = useState<boolean>(false);
	const [displayCreateForm, setDisplayCreateForm] = useState<boolean>(false);
	const [displayAddForm, setDisplayAddForm] = useState<boolean>(false);
	const [displayNotesForm, setDisplayNotesForm] = useState<boolean>(false);
	const [notes, setNotes] = useState<Note[]>([]);
	const [activeNote, setActiveNote] = useState<Note | null>(null);
	const [activeSteeringGear, setActiveSteeringGear] =
		useState<SteeringGear | null>(null);

	// const fetchData = (): Promise<void> => {
	// 	return Requests.getAllGears().then((gears) => {
	// 		setAllGears(gears);
	// 		if (gears.length > 0) {
	// 			setActiveSteeringGear(gears[0]);
	// 		}
	// 	});
	// };

	const fetchData = (): Promise<void> => {
		return Requests.getAllGears().then((gears) => {
			setAllGears(gears);
			if (gears.length > 0) {
				setActiveSteeringGear(gears[0]);
			}
		});
	};

	const fetchUsers = () => {
		return Requests.getAllUsers().then((users) => setUsers(users));
	};

	const fetchNotes = () => {
		return Requests.getAllNotes().then((notes) => setNotes(notes));
	};

	useEffect(() => {
		fetchData();
		fetchUsers();
		fetchNotes();
		const storedUser = localStorage.getItem("activeUser");
		if (storedUser) {
			setActiveUser(JSON.parse(storedUser));
		}
	}, []);

	const setToActive = (gear: SteeringGear) => {
		setActiveSteeringGear(gear);
	};

	const setNoteActive = (note: Note) => {
		setActiveNote(note);
	};

	const logIn = (userName: string, password: string) => {
		const user = users.find(
			(user) => user.userName === userName && user.password === password
		);
		if (user) {
			setActiveUser(user);
			localStorage.setItem("activeUser", JSON.stringify(user));
			toast.success("Logged in successfully");
			setDisplayLoginForm(false);
		} else {
			toast.error("Invalid username or password");
		}
	};

	const logOut = () => {
		setActiveUser(null);
		localStorage.setItem("activeUser", JSON.stringify(null));
		toast.success("Logged out successfully");
	};

	// const createGear = (gear: Omit<SteeringGear, "id">): Promise<void> => {
	// 	return Requests.postGear(gear)
	// 		.then(() => fetchData())
	// 		.then(() => {
	// 			toast.success("New Steering Gear added");
	// 		});
	// };

	const createGear = (gear: Omit<SteeringGear, "id">): Promise<void> => {
		return Requests.postGear(gear)
			.then(() => fetchData())
			.then(() => {
				toast.success("New Steering Gear added");
			});
	};

	const noteDisplay = (): string => {
		if (activeUser && activeSteeringGear) {
			const userId = Number(activeUser.id);
			const gearId = Number(activeSteeringGear.id);

			const matchingNote = notes.find(
				(note) =>
					Number(note.userId) === userId && Number(note.gearId) === gearId
			);

			if (matchingNote) {
				return matchingNote.content;
			}
		}

		return "Log in to see your notes on this part";
	};

	const contextValue = {
		allGears,
		setAllGears,
		fetchData,
		fetchUsers,
		users,
		activeUser,
		setActiveUser,
		displayLoginForm,
		setDisplayLoginForm,
		activeSteeringGear,
		setToActive,
		displayAddForm,
		setDisplayAddForm,
		createGear,
		logIn,
		displayCreateForm,
		setDisplayCreateForm,
		noteDisplay,
		notes,
		displayNotesForm,
		setDisplayNotesForm,
		logOut,
		setNoteActive,
		activeNote,
		setActiveNote,
	};

	return (
		<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
	);
};
