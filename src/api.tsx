import { Note, SteeringGear, User } from "./types";

const baseUrl = "http://localhost:3000";

const getAllGears = (): Promise<SteeringGear[]> => {
	return fetch(`${baseUrl}/gearData`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch gears");
			}
			return response.json();
		})
		.then((data) => {
			if (!Array.isArray(data)) {
				throw new Error("Invalid data format");
			}
			return data;
		});
};

<<<<<<< HEAD
const updateGear = (
	gear: Partial<SteeringGear> & { id: number }
): Promise<SteeringGear> => {
	const body = JSON.stringify(
		Object.fromEntries(Object.entries(gear).filter(([_, v]) => v !== undefined))
	);

	return fetch(`${baseUrl}/gearData/${gear.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body,
	}).then((response) => {
		if (!response.ok) {
			throw new Error("Failed to update gear");
		}
		return response.json();
	});
};
=======
const updateGear = (gear: SteeringGear): Promise<SteeringGear> => {
	return fetch(`${baseUrl}/gearData/${gear.id}`, {
	  body: JSON.stringify(gear),
	  method: "PUT",
	  headers: {
		"Content-Type": "application/json",
	  },
	}).then((response) => {
	  if (!response.ok) {
		throw new Error("Failed to update gear");
	  }
	  return response.json();
	});
  };
  
>>>>>>> 388693ce5503ecf1819508077da8f3dad34581ac

const getAllUsers = (): Promise<User[]> => {
	return fetch(`${baseUrl}/users`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch Users");
			}
			return response.json();
		})
		.then((data) => {
			if (!Array.isArray(data)) {
				throw new Error("Invalid data format");
			}
			return data;
		});
};

const getAllNotes = (): Promise<Note[]> => {
	return fetch(`${baseUrl}/notes`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch Users");
			}
			return response.json();
		})
		.then((data) => {
			if (!Array.isArray(data)) {
				throw new Error("Invalid data format");
			}
			return data;
		});
};

const postGear = (gear: Omit<SteeringGear, "id">): Promise<SteeringGear> => {
	return fetch(`${baseUrl}/gearData`, {
		body: JSON.stringify(gear),
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	}).then((response) => response.json());
};

const deleteGear = (id: number): Promise<void> => {
	return fetch(`${baseUrl}/gearData/${id}`, {
		method: "DELETE",
	}).then((response) => {
		if (!response.ok) {
			throw new Error("Failed to delete gear");
		}
	});
};

const postNote = (note: Omit<Note, "id">): Promise<Note> => {
	return fetch(`${baseUrl}/notes`, {
		body: JSON.stringify(note),
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	}).then((response) => {
		if (!response.ok) {
			throw new Error("Failed to create note");
		}
		return response.json();
	});
};

const deleteNote = (id: number): Promise<void> => {
	return fetch(`${baseUrl}/notes/${id}`, {
		method: "DELETE",
	}).then((response) => {
		if (!response.ok) {
			throw new Error("Failed to delete note");
		}
	});
};

const postUser = (user: Omit<User, "id">): Promise<User> => {
	return fetch(`${baseUrl}/users`, {
		body: JSON.stringify(user),
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	}).then((response) => response.json());
};

const deleteUser = (id: number): Promise<void> => {
	return fetch(`${baseUrl}/users/${id}`, {
		method: "DELETE",
	}).then((response) => {
		if (!response.ok) {
			throw new Error("Failed to user gear");
		}
	});
};

export const Requests = {
	getAllGears,
	getAllUsers,
	getAllNotes,
	postGear,
	deleteGear,
	postNote,
	deleteNote,
	postUser,
	deleteUser,
	updateGear,
};
