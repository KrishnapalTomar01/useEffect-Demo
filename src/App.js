import {useState, useEffect} from 'react';
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
  // users.pop();
  // setUsers(users);
  return (
    <div className="App">
       <UserDisplay users={users}/>
    </div>
  );
}

export default App;
