import React, { useState } from "react";
import "./App.css";
import { puppyList } from "./data";

const App = () => {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handleClick = (id) => {
    console.log("Click Me!");
    setFeatPupId(id);
  };

  const featuredPup = puppies.find((pup) => {
    return pup.id === featPupId;
  });

  console.log("featured", featuredPup);

  return (
    <div>
      <h1>Puppies</h1>
      {puppies.map((puppy) => {
        return (
          <p key={puppy.id} onClick={() => handleClick}>
            {puppy.name}
          </p>
        );
      })}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
