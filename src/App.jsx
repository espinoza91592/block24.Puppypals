import React, { useState }  from "react";
import "./App.css";
import { puppyList } from "./data";

const App = => {

  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppyList);

  return (
    <div>
      <h1>Puppies</h1>
      {puppies.map((puppy) => {
        return <p>{puppy.name}</p>;
      })}
    </div>
  )
};

export default App;
