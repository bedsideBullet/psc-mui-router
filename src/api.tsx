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

export const Requests = {
	getAllGears,
	getAllUsers,
	getAllNotes,
	postGear,
	deleteGear,
	postNote
};
