import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

/** Rotas da nossa aplicação */
import Routes from './routes';

/** Importando o Componente Header  */
import Header from './components/Header';

/** Estilos Globais da Aplicação */
import GlobalStyles from './styles/global';

/** Estado global do Redux */
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
