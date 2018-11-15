import React from 'react';

const Card = (props) => {
  return (
    <div className={`card ${ props.styleName }`} id={ props.id } >
      {props.children}
    </div>
  );
}

export default Card;
