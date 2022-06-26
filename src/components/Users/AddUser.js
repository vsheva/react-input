import React, { useState } from 'react';

import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import classes from './AddUser.module.css';

const AddUser = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) return;
    if (enteredAge < 1) return;

    //console.log(enteredName, enteredAge);

    props.onAddUser(enteredName, enteredAge)
    setEnteredName('');
    setEnteredAge('');
  };

  const userNameChangeHandler = e => {
    setEnteredName(e.target.value);
  };

  const ageChangeHandler = e => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input value={enteredName} id="username" type="text" onChange={userNameChangeHandler} />
        <label htmlFor="age">Age(Years</label>
        <input value={enteredAge} id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
