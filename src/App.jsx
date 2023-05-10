import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <LoadCountries></LoadCountries>
    </>
  );
} /** App F end here */
function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      <h2>All Countries</h2>
      <h2>Total Countries: {countries.length}</h2>
    </>
  );
} /** Load Countries F end here */
export default App;
