import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from ".";
import { IToDo } from "./model/IToDo";
import { addTodoAction } from "./redux/todosSlice";

function App() {
	const todos = useSelector<AppState, IToDo[]>(s => s);

	const [text, setText] = useState("");
	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setText(e.target.value);
	}

	const dispatch = useDispatch<AppDispatch>();
	function handleAddButtonClick() {
		if (!text) return;
		dispatch(addTodoAction(text));
		setText("");
	}

	return (
		<>
			<section>
				<input value={text} onChange={handleInputChange} />
				<button onClick={handleAddButtonClick}>ADD</button>
			</section>
			<section>
				<ul>
					{todos.map((todo, i) => (
						<li key={i}>{todo.text}</li>
					))}
				</ul>
			</section>
		</>
	);
}

export default App;
