import React from 'react';
import valImg from '../../img/validation.svg';
import '../../styles/valform.scss';
import { Link } from 'react-router-dom';

export default function ValForm() {
	return (
		<div className='val-form__wrapper'>
			<form className='val-form'>
				{' '}
				<div className='val-form__container'>
					<div className='form__img'>
						<img src={valImg} alt='заглавное изображение' />
					</div>
					<h1>Авторизация</h1>
					<input type='email' placeholder='Электронная почта' />
					<label>
						<input type='password' placeholder='Пароль' />
						<Link to='/recpass'>Забыл пароль</Link>
					</label>
					<div>
						<button className='button-sub'>Войти</button>
					</div>
					<div className='rectangle'>
						<button className='button-reg'>
							<p>
								<Link to='/reg'>Зарегистрироваться</Link>
							</p>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
