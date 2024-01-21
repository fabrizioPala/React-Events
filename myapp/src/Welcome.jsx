import React from "react";
import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, <strong>{name}</strong></p>
      {age>18 ?<p>You are {age}</p>:<p>You are Very Young!</p> }

    </div>
  );
}



