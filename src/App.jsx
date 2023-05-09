import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 2000,
    },
    {
      id: 3,
      name: "Tablet",
      price: 3000,
    },
  ];
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </>
  );
}

function Product(props) {
  console.log(props);
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}

export default App;
