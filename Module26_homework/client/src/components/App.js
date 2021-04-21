import React from 'react';
import '../styles/style.scss';
import RegForm from './RegForm/RegForm';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './Main';
import logo from '../img/logo.svg';
import QApage from './QApage/QApage';
import ValForm from './ValForm/ValForm';
import RecPass from './RecPass/RecPass';

function App() {
	return (
		<>
			<Router>
				<header>
					<img src={logo} alt='логотип скиллдрайв' />
					<div className='header__nav-and-btn'>
						<nav>
							<ul>
								<li>
									<Link to='/'>О нас</Link>
								</li>
								<li>
									<Link to='/'>Условия</Link>
								</li>
								<li>
									<Link to='/qa'>Частые вопросы</Link>
								</li>
							</ul>
						</nav>

						<button>
							<Link to='/val'>Войти</Link>
						</button>
					</div>
				</header>
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
