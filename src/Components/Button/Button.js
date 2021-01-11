import React from 'react';
import './style.css';

const Button = (props) => {
    return (
        <button
        className={["button", props.btnType].join(' ')}
          onClick={props.clicked}>{props.children}</button>
    );
};

export default Button;