import React, {useState} from 'react'

export default function Collapsible(props) {
    let [isOpen, setIsOpen] = useState(false);
    let [buttonClassName, setButtonClassName] = useState('content__collapsible');

function handleClick() {
        if (isOpen === false) setButtonClassName (buttonClassName = 'content__collapsible active');
        else setButtonClassName (buttonClassName = 'content__collapsible');
        setIsOpen(!isOpen);
    }

    return (
        <div className='content'>
            <button type="button" className={buttonClassName} onClick={handleClick}>
                {props.label}
            </button>
            {isOpen && <div className='content__text'>
                {props.children}
            </div>}
            
        </div>
    )
}

