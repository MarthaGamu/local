import React, { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
	const LOCAL_STORAGE_KEY = 'todoApp.todos';
	const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
	console.log('storedTodos', storedTodos);
	const [todos, setTodos] = useState(storedTodos);
	const AddingTodo = useRef();

	console.log('Todos', todos);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);

	const handleOnClick = (e) => {
		e.preventDefault();
		const enterValue = AddingTodo.current.value;
		console.log('enterValue', enterValue);
		if (enterValue === '') return alert('Please enter value');
		setTodos((prevTodos) => {
			return [
				...prevTodos,
				{ id: Math.random(), text: enterValue, complete: false }
			];
		});
		AddingTodo.current.value = null;
	};

	const handleDelete = (id) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	const handleComplete = (id) => {
		const toggleTodos = [...todos];
		const todo = toggleTodos.find((todo) => todo.id === id);
		todo.complete = !todo.complete;
		setTodos(toggleTodos);
	};
	return (
		<div className='App'>
			<form onSubmit={handleOnClick}>
				<input type='text' placeholder='Add to doo' ref={AddingTodo} />
				<button onClick={handleOnClick}>Add</button>
				<TodoList
					todos={todos}
					handleDelete={handleDelete}
					handleComplete={handleComplete}
				/>
			</form>
		</div>
	);
}

export default App;
