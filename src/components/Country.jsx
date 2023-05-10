const Country = (props) => {
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
};

export default Country;
