import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';

const mapStateToProps = (state) => ({
	todos: state.todo,
	showCompleted: state.filter.showCompleted,
});

export default connect(mapStateToProps)(TodoList);
