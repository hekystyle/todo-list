import { Middleware } from "redux";

export const STORAGE_KEY = "@hekystyle/todolist:store";

export const persistorMiddleware: Middleware = store => next => action => {
	next(action);

	localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState()));
}
