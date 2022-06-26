import React from 'react';
import classes from './Card.module.css';

//пробросили стили из AddUser.module.css
const Card = props => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;

//className from props (выше)
//classes.card  (из css модулей)