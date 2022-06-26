import React, { useState } from 'react';
import AddUser from './components/Users/AddUser.js';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    return setUsersList(prev => {
      return [...prev, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

// передаем enteredName, enteredAge вверх, как - через вызов
// функции, принимая их как аргументы
//         ---вверху создаем обработчик, который принимает 2 параметра
//         --- передаем через пропс обработчик
//         ---вызываем, подставляя наши состояния как аргументы обработчика

/**
 #96
 по клику - создаем обьект нового User с введенными данными,
 добавляем его в массив узеров. Обьект потом выводим в UserList

 - lifting state up
 - мы должны управлять списком юзеров в месте, где мы бы имели доступ
к addUser и UserList, чтобы скормить наш массив юзеров в него.
 - мы не имеем доступа к UserList изнутри AddUser

 -- [usersList, setUsersList]= useState([])
 --1) (USERLIST.JS)  добавляем к UserList компоненте props, куда запихиваем наш
 пустой пока массив

 ---2) (App.js) когда мы кликаем на кнопку, мы перенаправляем EnteredName and EnteredAge в
 App.js Делаем это через пропсы и обработчик onAddUser={addUserHandler} через него прокидываем
       --- addUserHandler принимает uName, uAge =возвращает обновленный
 сеттер состояния (prev->,сетим через ф-ю обратного вызова, делая return [...prev, {}]), в котором мы создаем нашего юзера и добавляем его
 наш список-массив -добавляем наш новый элемент(обьект) в список (массив).
   ПОДСКАЗКА: возвращаем сразу массив, в который с помощью деструктуризации
 запихиваем элементы из предыдущих состояний
 (предыдущие обьекты  из массива: вытаскиваем все элементы из предыдущего
 array и добавляем их как новые элементы в новому массиву) + добавляем
 новый элемент в виде обьекта { name: uName, age: uAge}

  ТО ЕСТЬ мы создали новый JS обьект для каждого юзера и
 добавили его в наш UserList массив

 -- <AddUser onAddUser={addUserHandler}

 --3) (AddUser.js) вызываем наш обработчик  props.onAddUser() и передаем наши состояния
 enteredName, enteredAge.  Делаетмся это по клику (то есть внутри
 обработчика клика

 */
