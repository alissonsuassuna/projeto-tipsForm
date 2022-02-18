import React from "react";

function App() {
  return (
    <div className="container">
        <form className="form">
            <h1>TipsForm</h1>
            <input type="text" placeholder="Nome de usuário" />
            <input type="password" placeholder="senha" />
            <button type="submit">Login</button>
        </form>
    </div>  
  );
}

export default App;
