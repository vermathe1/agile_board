import todos from './reducers';
import {applyMiddleware,createStore} from 'redux';
import {createLogger} from "redux-logger";

const logger = createLogger();
const middleWare = applyMiddleware(logger);

const configureStore =(initialValue)=>createStore(todos,initialValue,middleWare);
export default configureStore;