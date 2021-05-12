import { TOGGLE_COMPLETED } from '../actions/filter';

const DEFAULT_FILTER_STATE = {
	showCompleted: true,
};

export const filterReducer = (state = DEFAULT_FILTER_STATE, action) => {
	switch (action.type) {
		case TOGGLE_COMPLETED:
			return {
				...state,
				showCompleted: !state.showCompleted,
			};
		default:
			return state;
	}
};
