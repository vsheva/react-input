import React, { useState } from 'react';

import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(); //undefined(empty),null ==>falsy

  const addUserHandler = e => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0).',
      });
      return;
    }
    //console.log(enteredName, enteredAge);
    props.onAddUser(enteredName, enteredAge);
    setEnteredName('');
    setEnteredAge('');
  };

  const userNameChangeHandler = e => {
    setEnteredName(e.target.value);
  };

  const ageChangeHandler = e => {
    setEnteredAge(e.target.value);
  };

  const onErrorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal onConfirm={onErrorHandler} title={error.title} message={error.message} />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input value={enteredName} id="username" type="text" onChange={userNameChangeHandler} />
          <label htmlFor="age">Age(Years</label>
          <input value={enteredAge} id="age" type="number" onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
