import React from 'react';

const Button = ({btnLabel, btnClassName, btnType, onClick}) => {
    return (
        <button onClick={onClick} className={btnClassName} type={btnType} >
            {btnLabel}
        </button>
    );
}

export default Button;
