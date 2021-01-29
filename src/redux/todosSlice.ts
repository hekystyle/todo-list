import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToDo } from "../model/IToDo";
import { STORAGE_KEY } from "./persistorMiddleware";

type ToDosState = IToDo[];

const todosSlice = createSlice({
	name: "todos",
	initialState: [] as ToDosState,
	reducers: {
		restore: {
			reducer: (state, action: PayloadAction<ToDosState>) => action.payload,
			prepare: () => {
				const json = localStorage.getItem(STORAGE_KEY);

				return {
					payload: json ? JSON.parse(json) : [],
				};
			},
		},
		add: {
			reducer: (state, action: PayloadAction<IToDo>) => [...state, action.payload],
			prepare: (text: string) => ({
				payload: {
					text: text,
				},
			}),
		},
	},
});

export const todosReducer = todosSlice.reducer;
export const restoreAction = todosSlice.actions.restore;
export const addTodoAction = todosSlice.actions.add;
