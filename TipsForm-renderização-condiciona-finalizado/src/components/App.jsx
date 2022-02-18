import React from "react";
import Login from "./Login";

let isLoggedIn = false;

const currentTime = new Date(2022, 2, 1,12).getHours();

console.log(currentTime)

function App() {
  return (
    <div className="container">
        {
           // isLoggedIn ? <h1>TipsForm</h1> : <Login />

            currentTime > 12 && <h1>Por você ainda está trabalhando</h1> 
            
        }
    </div>  
  );
}

export default App;
