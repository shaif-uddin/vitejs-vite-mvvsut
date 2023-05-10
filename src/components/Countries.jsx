import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="main-content">
      <section className="cards-container">
        {countries.map((country) => (
          <div className="country-card">
            <Country
              //   name={country.name.common}
              //   official={country.name.official}
              //   flag={country.flags.svg}
              //   population={country.population}
              //   region={country.region}
              //   capital={country.capital}
              country={country}
            ></Country>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Countries;
