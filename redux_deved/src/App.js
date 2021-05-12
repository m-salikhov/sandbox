import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();

	return (
		<div className='App'>
			<h1>Счётчик {counter}</h1>
			<button type='button' onClick={() => dispatch(increment())}>
				+
			</button>
			<button type='button' onClick={() => dispatch(decrement())}>
				-
			</button>

			{isLogged ? <h3>Вы вошли в аккаунт, если видите это</h3> : ''}
		</div>
	);
}

export default App;
