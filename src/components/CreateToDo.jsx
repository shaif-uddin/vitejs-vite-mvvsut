import axios from "axios";
import { useState } from "react";

const CreateToDo = () => {
  const [userID, setUserID] = useState("");
  const [title, setTitle] = useState("");
  const [complete, setComplete] = useState(false);

  const handleClick = () => {
    const data = {
        id: 1,
        userID: userID,
        title: title,
      complete: complete,
    };
    
   
  return (
    <>
      <h2>Post Request</h2>
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
