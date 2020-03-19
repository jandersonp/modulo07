import { combineReducers } from 'redux';

/** Reducers */
import cart from './cart/reducer';

/** Combina todos os reducers em apenas um */
export default combineReducers({ cart });
