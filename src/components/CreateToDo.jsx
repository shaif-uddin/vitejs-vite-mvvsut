import { useState } from "react";

const CreateToDo = () => {
  const [userID, setUserID] = useState("");
  const [title, setTitle] = useState("");
  const [complete, setComplete] = useState(false);

  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userID: complete,
        title: title,
        complete: complete,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    // console.log({ userID: userID, title: title, complete: complete });
  };
  return (
    <>
      <h2>Hello create to DO</h2>
      <input
        type="number"
        onChange={(event) => {
          const number = Number(event.target.value);
          setUserID(number);
        }}
      />
      <br />
      <input
        type="text"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <br />
      <label htmlFor="">Completed</label>
      <input type="checkbox" onChange={() => setComplete(!complete)} />
      <label>
        <br />
        <button onClick={handleClick}>Update</button>
      </label>
    </>
  );
};

export default CreateToDo;
