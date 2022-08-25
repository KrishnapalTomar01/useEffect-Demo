import { useState, useEffect } from 'react';
import './App.css';
import UserDisplay from './UserDisplay';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((usersData) => setUsers(usersData));
  }, []);
  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => response.json())
  //   .then((usersData) => setUsers(usersData));

  const onClickHandler = () => {
    users.pop();
    console.log(users);
    const newUsers = [...users];
    setUsers(newUsers);
  }
  return (
    <div className="App">
      <UserDisplay users={users} />
      <button onClick={onClickHandler}>remove user</button>
    </div>
  );
}

export default App;
