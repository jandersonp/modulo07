/** Configuração Inicial do Redux */
import { createStore } from 'redux';

/** Configuração dos Reducers */
import rootReducer from './modules/rootReducer';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;
