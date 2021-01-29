import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToDo } from "../model/IToDo";

const todosSlice = createSlice({
	name: "app",
	initialState: [] as IToDo[],
	reducers: {
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
export const addTodoAction = todosSlice.actions.add;
