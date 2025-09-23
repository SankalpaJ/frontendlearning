/* Props
import Button from "./button";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Greeting from "./components/Greeting";

function App(){
  let name = "Gamana";
  let age = 23;
  return(
    <div>
      <h1>Welcome to react - {name} anf your age is {age}</h1>
      <Greeting name = "Chandu" age = {age}/>
      <Home name = {name}/>
      <About />
      <Contact />
      <Button />
    </div>
  );
}
export default App;   */
//---------------------------------------------------------------------------------------------------

/* useState
import { useState } from "react";

function App() {
  let[count, setCount] = useState(0);
  let inc = () => {
      setCount(count + 1);
  }
  let dec = () => {
      setCount(count - 1);
  }
  let reset = () => {
      setCount(0);
  }
  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
export default App;  */
//-----------------------------------------------------------------------------

/* useEffect:-- after main(return)exectuted this will be exected see in "console" 
import { useEffect, useState } from "react";

function App() {
  let[count, setCount] = useState(0);
  useEffect(() => console.log("you clicked"));
  let inc = () => {
      setCount(count + 1);
  }

  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={inc}>+</button>
    </div>
  );
}
export default App;    */
//-------------------------------------------------------------------------------------------------

// Routers
import React from 'react'
export default function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}
