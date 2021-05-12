export const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'count/increment':
			return state + 1;
		case 'count/decrement':
			return state - 1;
		default:
			return state;
	}
};
