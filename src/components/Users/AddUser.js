import React, {useState} from 'react';

import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import classes from './AddUser.module.css';

const AddUser = props => {
  const [enteredName, setEnteredName]= useState('')
  const [enteredAge, setEnteredAge]= useState('')

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(enteredName, enteredAge)
  };

  const userNameChangeHandler=(e)=>{
    setEnteredName(e.target.value);
  }

  const ageChangeHandler=(e)=>{
    setEnteredAge(e.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameChangeHandler} />
        <label htmlFor="age">Age(Years</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
