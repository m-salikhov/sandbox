import React from 'react'
import AboutUser from './AboutUser'


export default function Main() {
    return (
        <main>
            <p>шаг 1 из 3</p>
            <h1>Расскажите о себе</h1>
            <div className='container'>
                <AboutUser/>
            </div>
        </main>
    )
}
