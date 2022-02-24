import React from "react";
import Form from "./Form";

let userIsRegistered = false;

function App() {
  return (
    <div className="container">
       <Form userIsRegistered={userIsRegistered} />
    </div>  
  );
}

export default App;

