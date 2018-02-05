import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'; 
import configureStore from './configureStore';
import {saveItem,getItemFromLocalStorage} from './localStorage'

const persistedState = {
	addTodos :getItemFromLocalStorage('todos') || [],
}
const store = configureStore(persistedState);

store.subscribe(()=>{
 	var todos = store.getState().addTodos;
 	if(!!todos){
 		saveItem(todos,'todos');
 	}
 })

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, document.getElementById('root')
);