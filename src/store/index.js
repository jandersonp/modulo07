/** Configuração Inicial do Redux */
import { createStore } from 'redux';

/** Configuração dos Reducers */
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;
