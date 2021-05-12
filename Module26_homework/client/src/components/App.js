import React from 'react';
import '../styles/style.scss';
import RegForm from './RegForm/RegForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main';
// import logo from '../img/logo.svg';
import QApage from './QApage/QApage';
import ValForm from './ValForm/ValForm';
import RecPass from './RecPass/RecPass';
import Header from './Header';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Main} />
					<Route path='/reg' component={RegForm} />
					<Route path='/qa' component={QApage} />
					<Route path='/val' component={ValForm} />
					<Route path='/recpass' component={RecPass} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
