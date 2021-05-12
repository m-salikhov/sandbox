import React from 'react';

export const TodoItem = ({ todo, toggleTodo }) => {
	const onClick = () => toggleTodo(todo.id);

	return (
		<li
			onClick={onClick}
			style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
		>
			{todo.text}
		</li>
	);
};
