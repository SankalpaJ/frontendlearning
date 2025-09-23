/* prpos
import Greeting from "./components/Greeting";
import Home from "./components/Home";
function App() {
  let name = "Sankalpa Janardhan";
  let age = 23;
  return (
    <div>
      <Home name = {name}/>
      <Greeting name = "Ganesh" age = {age}/>
    </div>
  )
}
export default App;          */
//--------------------------------------------------------------------------

/* useState Hook
import { useState } from "react";
import Home from "./components/Home";

function App() {
  // let name = "Ganiiiii";     nrml variable of js
  let[name, setName] = useState("Madhu");      // react state var[var_name, stateHandlerName]
  let update = () => {
    setName("Ganiiii");
  } 
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={update}>Click</button>
    </div>
  )
}
export default App;        */
//-------------------------------------------------------

// useEffect
import { useEffect, useState } from "react";
function App() {
  let[count, setCount] = useState(0)
  useEffect(() => { console.log("you clicked"), count});
  let inc = () => {
    setTimeout(() => {
     setCount((count) => count += 1);
  }, 1000);
};
  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={inc}>+</button>
    </div>
  )
}
export default App;