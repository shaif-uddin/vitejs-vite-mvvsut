import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="users">
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
}
function User(props) {
  return (
    <li className="user">
      Name: {props.name} & Email: {props.email}
    </li>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  // console.log(abc);
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </>
  );
}

export default App;
