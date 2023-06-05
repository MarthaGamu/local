import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, handleDelete, handleComplete }) {
	return (
		<div>
			{todos.map((todo) => {
				return (
					<Todo
						todo={todo}
						id={todo.id}
						handleDelete={handleDelete}
						handleComplete={handleComplete}
					/>
				);
			})}
		</div>
	);
}
