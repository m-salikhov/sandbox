import './App.css';
import TodoList from './containers/TodoList';
import AddTodo from './containers/AddTodo';

function App() {
	return (
		<div className='App'>
			<TodoList todos={[]} />
			<AddTodo />
		</div>
	);
}

export default App;
