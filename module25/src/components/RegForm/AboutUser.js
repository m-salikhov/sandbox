import React from 'react';

export default function AboutUser() {
	return(
		<>
			
			<form>
				<h2>Информация о вас</h2>
					<label>
						ФИО <input className='name' placeholder='ФИО полностью' type='text'/> 
					</label>
					<label>
						Дата рождения <div className='date'><input className='dateBirthday' type='date'/></div> 
					</label>
					<label>
						Электронная почта <input className='email' placeholder='mail@example.com' type='email'/> 
					</label>
					<label>
						Телефон <input className='phone' placeholder='+7 900 000-00-00' type='tel'/> 
					</label>
				<h2>Паспорт</h2>
					<label>
						Серия и номер<input className='series' placeholder='0000 000000' type='text'/> 
					</label>
					<label>
						Дата выдачи <div className='date'><input className='datePassport' type='date'/> </div>
					</label>
					<label>
						Кем выдан <input className='issued' placeholder='Название органа выдавшего паспорт' type='text'/> 
					</label>
					<label>
						Код подразделения <input className='codeIssued' placeholder='000-000' type='text'/> 
					</label>
				<h2>Водительское удостоверение </h2>
					<label>
						Серия и номер<input className='licenseNumber' placeholder='0000 000000' type='text'/> 
					</label>
					<label>
						Дата выдачи <div className='date'><input className='dateLicense' type='date'/></div> 
					</label>
				<h2>Пароль</h2>
					<label>
						Придумайте пароль<input className='pass' type='password'/> 
					</label>
					<label>
						Повторите пароль <input className='passRepeat' type='password'/> 
					</label>
				<div className='rectangle'> 
					<button className='subButton' type='submit'>Продолжить</button>
				</div>
			</form>
		</>
	);
}