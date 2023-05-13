import { useEffect, useState } from "react";
import "./App.css";
import CreateToDo from "./components/CreateToDo";
function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=1")
      .then((res) => res.json())
      .then((resData) => setData(resData));
  }, []);
  return (
    <div className="main-content">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <CreateToDo></CreateToDo>
    </div>
  );
} /** App F end here */

export default App;
