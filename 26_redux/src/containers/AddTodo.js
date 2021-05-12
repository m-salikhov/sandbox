import { AddTodo } from '../components/AddTodo';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import { toggleCompleted } from '../actions/filter';

// const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
	addTodo: (text) => dispatch(addTodo(text)),
	toggleCompleted: () => dispatch(toggleCompleted()),
});

export default connect(null, mapDispatchToProps)(AddTodo);
