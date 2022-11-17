import React from "react";
// import Final from "./2-useEffect/starter/4-useEffect-example-2-my-code"
// import Final from  "./2-useEffect/final/4-useEffect-example-2"
// import Index from "./1-useState/starter/1-useState-basics";
// import Api from "./apitest";
import Final from './4-useReducer/starter/1-useRedcuer-basics'

function App() {
  console.log("str", new Date(new Date().setDate(new Date().getDate() - 30)));
  return (
    <div className="App">
      <Final/>
    </div>
  );
}

export default App;
