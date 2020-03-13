import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/** Rotas da nossa aplicação */
import Routes from './routes';

/** Importando o Componente Header  */
import Header from './components/Header';

/** Estilos Globais da Aplicação */
import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
