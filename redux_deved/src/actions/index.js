export const increment = () => {
	return {
		type: 'count/increment',
	};
};

export const decrement = () => {
	return {
		type: 'count/decrement',
	};
};
