import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { restoreAction, todosReducer } from './redux/todosSlice';
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import { persistorMiddleware } from './redux/persistorMiddleware';

const store = configureStore({
	reducer: todosReducer,
	middleware: [
		...getDefaultMiddleware(),
		logger,
		persistorMiddleware,
	],
});

store.dispatch(restoreAction());

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
