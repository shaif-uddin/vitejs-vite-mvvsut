import "./App.css";

function App() {
  const peoples = ["Rubel Ahmed", "John", "John Smith"];
  const peopleTextColor = [
    {
      color: "red",
    },
  ];
  return (
    <>
      {peoples.map((people, index) => (
        <Person name={people} key={index}></Person>
      ))}
    </>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="people">
      <h2>{props.name}</h2>
    </div>
  );
}

export default App;
