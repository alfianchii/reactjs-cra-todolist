import { useState } from "react";
import Table from "./Table";
import Message from "./Message";

export default function Form() {
	const [activity, setActivity] = useState("");
	const [edit, setEdit] = useState({});
	const [todos, setTodos] = useState([]);
	const [message, setMessage] = useState("");

	function generateId() {
		return Date.now();
	}

	function saveTodoHandler(event) {
		event.preventDefault();

		// If input activity was empty string
		if (!activity) return setMessage("Activity name should not be empty!");

		// Remove message when todo already added or updated
		setMessage("");

		// If edit mode
		if (edit.id) {
			// Updated todo
			const updatedTodo = {
				...edit,
				activity,
			};

			// Filter
			const editTodoIndex = todos.findIndex((todo) => todo.id === edit.id);

			// Set
			const updatedTodos = [...todos];
			updatedTodos[editTodoIndex] = updatedTodo;
			setTodos(updatedTodos);

			// Remove cancel edit
			return cancelEditHandler();
		}

		setTodos([
			...todos,
			{
				id: generateId(),
				activity,
				done: false,
			},
		]);

		setActivity("");
	}

	function removeTodoHandler(todoId) {
		const filteredTodos = todos.filter((todo) => todo.id !== todoId);

		setTodos(filteredTodos);

		// Remove cancel edit (edit mode)
		if (edit.id) cancelEditHandler();
	}

	function editTodoHandler(todo) {
		const input = document.getElementById("activity-name");
		input.focus();

		setActivity(todo.activity);
		setEdit(todo);
	}

	function cancelEditHandler() {
		setEdit({});
		setActivity("");
	}

	function doneTodoHandler(todo) {
		// Checked toggle todo
		const updatedTodo = {
			...todo,
			// Replace old 'done'
			done: todo.done ? false : true,
		};

		// Filter
		const editTodoIndex = todos.findIndex((currentTodo) => currentTodo.id === todo.id);

		// Set
		const updatedTodos = [...todos];
		updatedTodos[editTodoIndex] = updatedTodo;
		setTodos(updatedTodos);
	}

	return (
		<>
			<form className="mb-3" onSubmit={saveTodoHandler}>
				<Message>{message}</Message>

				<div className="input-group mb-3">
					<input autoFocus type="text" className="form-control" id="activity-name" placeholder="Activity name ..." value={activity} onChange={(event) => setActivity(event.target.value)} />
					<button className="btn btn-outline-primary" type="submit">
						{edit.id ? "Save" : "Add"}
					</button>
					{edit.id && (
						<button className="btn btn-outline-danger me-2" onClick={cancelEditHandler}>
							Cancel
						</button>
					)}
				</div>
			</form>

			<hr />

			<Table
				list={todos}
				acts={{
					remove: removeTodoHandler,
					edit: editTodoHandler,
					done: doneTodoHandler,
				}}
			/>
		</>
	);
}
