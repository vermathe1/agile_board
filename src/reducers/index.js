import {combineReducers} from 'redux';

const addTodo = (state,action)=>{
	return {
		text:action.text,
		id:action.id,
		currentStatus : action.current_status,
		isEditing:false
	}
}
const moveTodo = (state,action)=>{
	return Object.assign({},state,{
		currentStatus : action.current_status
	})
}
const editTodo = (state,action)=>{
	return Object.assign({},state,{
		isEditing:action.isEditing
	})
}
const updateTodo = (state,action)=>{
	return Object.assign({},state,{
		text:action.text,
		isEditing:false
	})
}
const addTodos = (state=[],action)=>{
	switch(action.type){
		case "ADD_TODO":{
			return [...state,addTodo(undefined,action)]
		}
		case "MOVE_TODO":{
			console.log(action)
			return state.map(todo=>{
				if(todo.id === action.id.toString()){
					return moveTodo(todo,action);
				}
				return todo;
			})
		}
		case "EDIT_TODO":{
			return state.map(todo=>{
				if(todo.id === action.id){
					return editTodo(todo,action);
				}
				return todo;
			})
		}
		case "DELETE_TODO":{
			var newArray = [];
			for(var i = 0; i<state.length;i++){
				if(state[i].id !== action.id){
					newArray.push(state[i])
				}
			}
			return newArray;
		}
		case "UPDATE_TODO":{
			return state.map(todo=>{
				if(todo.id === action.id){
					return updateTodo(todo,action);
				}
				return todo;
			})
		}
		case "CANCEL_TODO":{
			return state.map(todo=>{
				if(todo.id === action.id){
					return editTodo(todo,action);
				}
				return todo;
			})
		}
		default:{
			return state;
		}
	}
}

const todoApp = combineReducers({
	addTodos
});

export default todoApp;