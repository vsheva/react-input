import React, {useState, useRef} from 'react';

import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../helpers/Wrapper.js';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState(); //undefined(empty),null ==>falsy
  /**const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');*/


    const addUserHandler = e => {
        e.preventDefault();

        const enteredUserName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value
        console.log(enteredUserName, enteredUserAge) //*

        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0).',
            });
            return;
        }

        props.onAddUser(enteredUserName, enteredUserAge);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
       /* setEnteredName('');
        setEnteredAge('');*/
    };

   /**
     const userNameChangeHandler = e => {
        setEnteredName(e.target.value);    };

    const ageChangeHandler = e =>  {
        setEnteredAge(e.target.value);       };
*/

    const onErrorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && (
                <ErrorModal onConfirm={onErrorHandler} title={error.title} message={error.message}/>
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        //value={enteredName}
                        //onChange={userNameChangeHandler}
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />


                    <label htmlFor="age">Age(Years</label>
                    <input
                        //value={enteredAge}
                        //onChange={ageChangeHandler}
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;


//full version with controlled components

/**
import React, { useState } from 'react';

import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../helpers/Wrapper.js';

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
    if (+enteredAge < 1) {
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
    <Wrapper>
      {error && (
        <ErrorModal onConfirm={onErrorHandler} title={error.title} message={error.message} />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
              value={enteredName}
              id="username"
              type="text"
              onChange={userNameChangeHandler} />
          <label htmlFor="age">Age(Years</label>
          <input
              value={enteredAge}
              id="age"
              type="number"
              onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
*/
