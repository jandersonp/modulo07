import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/** Rotas da nossa aplicação */
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
