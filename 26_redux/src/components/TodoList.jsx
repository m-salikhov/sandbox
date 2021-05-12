import React from 'react';
import TodoItem from '../containers/TodoItem';

export const TodoList = ({ todos, showCompleted }) => {
	const visibleTools = showCompleted
		? todos
		: todos.filter((todo) => !todo.completed);

	return (
		<>
			<h3>My ToDos</h3>
			<ul>
				{visibleTools.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</>
	);
};
