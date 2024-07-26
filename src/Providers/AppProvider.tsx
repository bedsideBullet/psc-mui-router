import { createContext, ReactNode, useEffect, useState } from "react";
import { Note, SteeringGear, TAppContext, User } from "../types";
import { Requests } from "../api";
import toast from "react-hot-toast";

export const AppContext = createContext<TAppContext>({} as TAppContext);

export const AppProvider = ({ children }: { children: ReactNode }) => {
	const [allGears, setAllGears] = useState<SteeringGear[]>([]);
	const [users, setUsers] = useState<User[]>([]);
	const [notes, setNotes] = useState<Note[]>([]);
	const [activeUser, setActiveUser] = useState<User | null>(null);
	const [activeNote, setActiveNote] = useState<Note | null>(null);
	const [activeSteeringGear, setActiveSteeringGear] =
		useState<SteeringGear | null>(null);

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

	const logIn = (username: string, password: string) => {
		const user = users.find(
			(user) => user.username === username && user.password === password
		);
		if (user) {
			setActiveUser(user);
			localStorage.setItem("activeUser", JSON.stringify(user));
			toast.success("Logged in successfully");
		} else {
			toast.error("Invalid username or password");
		}
	};

	const logOut = () => {
		setActiveUser(null);
		localStorage.setItem("activeUser", JSON.stringify(null));
		toast.success("Logged out successfully");
	};

	const createGear = (gear: Omit<SteeringGear, "id">): Promise<void> => {
		return Requests.postGear(gear)
			.then(() => fetchData())
			.then(() => {
				toast.success("New Steering Gear added");
			});
	};

	const editGear = (
		gear: Partial<SteeringGear> & { id: number }
	): Promise<void> => {
		return Requests.updateGear(gear)
			.then(() => fetchData())
			.then(() => {
				toast.success("Steering Gear updated");
			})
			.catch((error) => {
				toast.error("Failed to update Steering Gear");
				console.error(error);
			});
	};

	const deleteGear = (id: number): Promise<void> => {
		if (!id) {
			toast.error("Failed to delete");
			return Promise.resolve();
		}
		return Requests.deleteGear(id)
			.then(() => fetchData())
			.then(() => {
				toast.success("Steering Gear deleted");
			})
			.catch((error) => {
				toast.error("Failed to delete");
				console.error(error);
			});
	};

	const createNote = (note: Omit<Note, "id">): Promise<void> => {
		return Requests.postNote(note)
			.then(() => fetchNotes())
			.then(() => {
				toast.success("New Note added");
			});
	};

	const deleteNote = (id: number): Promise<void> => {
		if (!id) {
			toast.error("Failed to delete");
			return Promise.resolve();
		}
		return Requests.deleteNote(id)
			.then(() => fetchNotes())
			.then(() => {
				toast.success("Note deleted");
			})
			.catch((error) => {
				toast.error("Failed to delete");
				console.error(error);
			});
	};

	const createUser = (user: Omit<User, "id">): Promise<void> => {
		return Requests.postUser(user) // Assuming the backend assigns an id
			.then(() => fetchUsers())
			.then(() => {
				toast.success("New User added");
			});
	};

	const deleteUser = (id: number): Promise<void> => {
		if (!id) {
			toast.error("Failed to delete");
			return Promise.resolve();
		}
		return Requests.deleteUser(id)
			.then(() => fetchUsers())
			.then(() => {
				toast.success("Account deleted");
			})
			.catch((error) => {
				toast.error("Failed to Account");
				console.error(error);
			});
	};

	const noteDisplay = () => {
		if (activeUser && activeSteeringGear) {
			const userId = Number(activeUser.id);
			const gearId = Number(activeSteeringGear.id);

			const matchingNote = notes.find(
				(note) =>
					Number(note.userId) === userId && Number(note.gearId) === gearId
			);
			if (matchingNote) {
				return matchingNote.title;
			} else return "Click to add notes";
		} else return "Log in to see your notes on this part";
	};

	const contextValue = {
		allGears,
		setAllGears,
		fetchData,
		fetchUsers,
		users,
		activeUser,
		setActiveUser,
		activeSteeringGear,
		setToActive,
		createGear,
		logIn,
		noteDisplay,
		notes,
		logOut,
		setNoteActive,
		activeNote,
		setActiveNote,
		deleteGear,
		createNote,
		deleteNote,
		createUser,
		deleteUser,
		editGear,
	};

	return (
		<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
	);
};
