import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter></Counter>
    </>
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
