import React from 'react';

const Button = (props) => {
  return (
    <button className={`btn ${ props.styleName }`} id={ props.id } onClick={props.send}>
      {props.children}
    </button>
  );
}

export default Button;
