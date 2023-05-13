import { useState } from "react";

const CreateToDo = () => {
  const [userID, setUserID] = useState("");
  const [title, setTitle] = useState("");
  const [complete, setComplete] = useState(false);

  const handleClick = () => {
    console.log({ userID: userID, title: title, complete: complete });
  };
  return (
    <>
      <h2>Hello create to DO</h2>
      <input
        type="number"
        onChange={(event) => {
          setUserID(event.target.value);
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
