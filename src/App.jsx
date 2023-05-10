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
    <div className="main-content">
      <h2>All Countries</h2>
      <h2>Total Countries:</h2>
      <section className="cards-container">
        {countries.map((country) => (
          <div className="country-card">
            <Country
              name={country.name.common}
              official={country.name.official}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital}
            ></Country>
          </div>
        ))}
      </section>
    </div>
  );
} /** Load Countries F end here */
function Country(props) {
  return (
    <>
      <div className="country-preview">
        <img src={props.flag} alt={props.official} />
      </div>
      <div className="country-info">
        <div className="country-detail">
          <div className="country-title">
            <h2>{props.name}</h2>
          </div>
          <p>
            Population: <span>{props.population.toLocaleString("en-US")}</span>
          </p>
          <p>
            Region: <span>{props.region}</span>
          </p>
          <p>
            Capital: <span>{props.capital}</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default App;
