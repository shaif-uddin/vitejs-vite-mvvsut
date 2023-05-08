import "./App.css";

function App() {
  return (
    <div className="App">
      <Person name="Rubel"></Person>
      <Person name="Shaif"></Person>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return <h2>My name is {props.name}</h2>;
}

export default App;
