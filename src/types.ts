export type SteeringGear = {
  id: string;
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
  id: string;
  title: string;
  userId: string;
  gearId: string;
  content: string;
};

export type User = {
  id: string;
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
  deleteGear: (id: string) => Promise<void>;
  createNote: (note: Note) => void;
  deleteNote: (id: string) => void;
  createUser: (user: User) => void;
  deleteUser: (id: string) => void;
  editGear: (gear: Partial<SteeringGear> & { id: string }) => Promise<void>;
};
