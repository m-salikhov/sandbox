import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AboutUser() {
	const [name, setName] = useState('');
	const [bdayDate, setBdayDate] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [passport, setPassport] = useState('');
	const [passDate, setPassDate] = useState('');
	const [passOrg, setPassOrg] = useState('');
	const [passOrgCode, setPassOrgCode] = useState('');
	const [licenseNumber, setLicenseNumber] = useState('');
	const [dateLicense, setDateLicense] = useState('');
	const [pass, setPass] = useState('');
	const [passRepeat, setPassRepeat] = useState('');

	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('/reg')
			.then((res) => res.json())
			.then((json) => setUsers(json));
	}, []);

	function onSubmit(e) {
		e.preventDefault();

		axios
			.post('/reg', { name, email })
			.then((res) => res.data)
			.then((data) => setUsers(data));
	}

	return (
		<>
			<ol>
				{users.map((u) => (
					<li>{`${u.name} ${u.email}`}</li>
				))}
			</ol>

			<form>
				<h2>Информация о вас</h2>
				<label>
					ФИО{' '}
					<input
						className='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder='ФИО полностью'
						type='text'
					/>
				</label>
				<label>
					Дата рождения
					<div className='date'>
						<input
							className='dateBirthday'
							value={bdayDate}
							onChange={(e) => setBdayDate(e.target.value)}
							type='date'
						/>
					</div>
				</label>
				<label>
					Электронная почта
					<input
						className='email'
						placeholder='mail@example.com'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type='email'
					/>
				</label>
				<label>
					Телефон
					<input
						className='phone'
						placeholder='+7 900 000-00-00'
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						type='tel'
					/>
				</label>
				<h2>Паспорт</h2>
				<label>
					Серия и номер
					<input
						className='series'
						placeholder='0000 000000'
						value={passport}
						onChange={(e) => setPassport(e.target.value)}
						type='text'
					/>
				</label>
				<label>
					Дата выдачи
					<div className='date'>
						<input
							className='datePassport'
							value={passDate}
							onChange={(e) => setPassDate(e.target.value)}
							type='date'
						/>
					</div>
				</label>
				<label>
					Кем выдан
					<input
						className='issued'
						placeholder='Название органа выдавшего паспорт'
						value={passOrg}
						onChange={(e) => setPassOrg(e.target.value)}
						type='text'
					/>
				</label>
				<label>
					Код подразделения
					<input
						className='codeIssued'
						placeholder='000-000'
						value={passOrgCode}
						onChange={(e) => setPassOrgCode(e.target.value)}
						type='text'
					/>
				</label>
				<h2>Водительское удостоверение </h2>
				<label>
					Серия и номер
					<input
						className='licenseNumber'
						placeholder='0000 000000'
						value={licenseNumber}
						onChange={(e) => setLicenseNumber(e.target.value)}
						type='text'
					/>
				</label>
				<label>
					Дата выдачи
					<div className='date'>
						<input
							className='dateLicense'
							value={dateLicense}
							onChange={(e) => setDateLicense(e.target.value)}
							type='date'
						/>
					</div>
				</label>
				<h2>Пароль</h2>
				<label>
					Придумайте пароль
					<input
						className='pass'
						value={pass}
						onChange={(e) => setPass(e.target.value)}
						type='password'
					/>
				</label>
				<label>
					Повторите пароль{' '}
					<input
						className='passRepeat'
						value={passRepeat}
						onChange={(e) => setPassRepeat(e.target.value)}
						type='password'
					/>
				</label>
				<div className='rectangle'>
					<button className='subButton' type='submit' onClick={onSubmit}>
						Продолжить
					</button>
				</div>
			</form>
		</>
	);
}
