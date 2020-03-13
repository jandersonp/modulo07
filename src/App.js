import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/** Rotas da nossa aplicação */
import Routes from './routes';

/** Estilos Globais da Aplicação */
import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
