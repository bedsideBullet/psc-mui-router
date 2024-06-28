import { ReactNode } from "react";

export type SteeringGear = {
  id?: number;
  image: string;
  partNumber: string;
  input: string;
  rotation: string;
  mountLocation: string;
  ratio: string;
  sectorSpline: string;
  direction: string;
};

export type Note = {
  id?: number;
  title: string;
  userId: number;
  gearId: number;
  content: string;
};

export type User = {
  id: number;
  userName: string;
  password: string;
  admin: boolean;
};

export type TAppContext = {
  allGears: SteeringGear[];
  setAllGears: React.Dispatch<React.SetStateAction<SteeringGear[]>>;
  setDisplayLoginForm: (display: boolean) => void;
  displayLoginForm: boolean;
  activeSteeringGear: SteeringGear | null;
  setToActive: (gear: SteeringGear) => void;
  createGear: (gear: SteeringGear) => void;
  users: User[] | null;
  activeUser: User | null;
  displayCreateForm: boolean;
  setDisplayCreateForm: (display: boolean) => void;
  logIn: (username: string, password: string) => void;
  setActiveUser: React.Dispatch<React.SetStateAction<User | null>>;
  noteDisplay: () => ReactNode;
  displayNotesForm: boolean;
  setDisplayNotesForm: (display: boolean) => void;
  logOut: () => void;
  notes: Note[];
  setNoteActive: (note: Note) => void;
  activeNote: Note | null;
  setActiveNote: (note: Note) => void;
  deleteGear: (id: number) => Promise<void>;
  createNote: (note: Note) => void;
  deleteNote: (id: number) => void;
};
