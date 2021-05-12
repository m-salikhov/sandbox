import React, { useState } from 'react';

export const AddTodo = ({ addTodo, toggleCompleted }) => {
	const [text, setText] = useState('');
	const onAddButtonClick = () => {
		addTodo(text);
		setText('');
	};
	const onInputChange = (e) => setText(e.target.value);

	return (
		<>
			<input
				type='text'
				placeholder='Enter text here'
				onChange={onInputChange}
				value={text}
			/>
			<button type='button' onClick={onAddButtonClick}>
				Add ToDo
			</button>
			<button type='button' onClick={toggleCompleted}>
				Toggle completed
			</button>
		</>
	);
};
