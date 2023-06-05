import React from 'react';

export default function Todo({ todo, id, handleDelete, handleComplete }) {
	return (
		<ul>
			<li>{todo.text}</li>
			<button
				onClick={() => {
					handleDelete(id);
				}}
			>
				Delete
			</button>
			<button
				onClick={() => {
					handleComplete(id);
				}}
			>
				{todo.complete ? 'Done' : 'Complete'}
			</button>
		</ul>
	);
}
