var uniqid = require('uniqid')
const addTodo =(inputValue)=>{
	return {
		type:"ADD_TODO",
		text:inputValue,
		id:uniqid(),
		current_status :"incomplete",
		isEditing:false
	};
}
const moveTodo =(status,id)=>{
	return {
		type:"MOVE_TODO",
		id:id,
		current_status :status
	};
}
const editTodo =(id)=>{
	return {
		type:"EDIT_TODO",
		id,
		isEditing:true
	};
}
const deleteTodo =(id)=>{
	return {
		type:"DELETE_TODO",
		id
	};
}
const updateTodo =(text,id)=>{
	return {
		type:"UPDATE_TODO",
		text:text,
		id
	};
}
const cancelTodo =(id)=>{
	return {
		type:"CANCEL_TODO",
		id
	};
}

module.exports = {
	addTodo,
	moveTodo,
	editTodo,
	deleteTodo,
	updateTodo,
	cancelTodo
}

