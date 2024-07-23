export type SteeringGear = {
	id?: number;
	partNumber: string;
	ratio: string;
	rotation: string;
	sectorSpline: string;
	input: string;
	turns: string;
	tbar: string;
	mountLocation: string;
	image: string;
};

export type Note = {
	id?: number;
	title: string;
	userId?: number;
	gearId: number;
	content: string;
};

export type User = {
	id?: number;
	username: string;
	password: string;
};

export type TAppContext = {
	allGears: SteeringGear[];
	setAllGears: React.Dispatch<React.SetStateAction<SteeringGear[]>>;
	activeSteeringGear: SteeringGear | null;
	setToActive: (gear: SteeringGear) => void;
	createGear: (gear: SteeringGear) => void;
	users: User[] | null;
	activeUser: User | null;
	logIn: (username: string, password: string) => void;
	setActiveUser: React.Dispatch<React.SetStateAction<User | null>>;
	noteDisplay: () => string;
	logOut: () => void;
	notes: Note[];
	setNoteActive: (note: Note) => void;
	activeNote: Note | null;
	setActiveNote: (note: Note) => void;
	deleteGear: (id: number) => Promise<void>;
	createNote: (note: Note) => void;
	deleteNote: (id: number) => void;
	createUser: (user: User) => void;
	deleteUser: (id: number) => void;
	editGear: (updatedGear: SteeringGear) => Promise<void>;
};
