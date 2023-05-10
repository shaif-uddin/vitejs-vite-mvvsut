const Country = (props) => {
  const { name, flags, official, area, region, capital, population } =
    props.country;
  return (
    <>
      <div className="country-preview">
        <img src={flags.svg} alt={name.official} />
      </div>
      <div className="country-info">
        <div className="country-detail">
          <div className="country-title">
            <h2>{name.common}</h2>
          </div>
          <p>
            Population: <span>{population.toLocaleString("en-US")}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Country;
