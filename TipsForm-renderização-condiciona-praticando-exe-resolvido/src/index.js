import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/**
 * Sem mover a variável userIsRegistered.

1. Mostre login como o texto do botão se userIsRegistered for true.
Mostrar Register como o texto do botão se userIsRegistered for false.

2. Apenas mostre a entrada confirm Password se userIsRegistered for false.
não mostre se userIsRegistered for verdadeiro
 */