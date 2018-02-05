import React from 'react';
import {connect} from 'react-redux';
import ShowEachTask from './showeachtask';
import {moveTodo,editTodo,deleteTodo,updateTodo,cancelTodo} from '../actions';

let listTodos =(props)=>{
	return(
			<ul data-draggable="target" onDrop={e=>props.onDrop(e,props.status)} onDragOver={e=>props.onDragOver(e)} className="progress-table">
				<h1>{props.status}</h1>
				{!!props.todos && props.todos.map((todo,index)=>{
					 return <ShowEachTask todo={todo} key ={index} onDragStart={e=>props.onDragStart(e)} 
					 onEdit={()=>props.onEdit(todo.id)}
					 onDelete={()=>props.onDelete(todo.id)}
					 onSave={props.onSave}
					 onCancel={()=>props.onCancel(todo.id)} 
					 />
				})}
			</ul>
		);
}

const getTodos =(todos,filter)=>{
	 return todos.filter(todo=>{
		return todo.currentStatus === filter;
	});
}

const mapStateToProps = (state,ownprops)=>{
	return{
		todos : getTodos(state.addTodos,ownprops.status)
	};
}

const mapDispatchToProps = (dispatch)=>{
	return{
		onDragStart:(e)=>{e.dataTransfer.setData("Text", e.target.id); },
		onDragOver:(e)=>{e.preventDefault();},
		onDrop:(e,status)=>{e.preventDefault(); dispatch(moveTodo(status,e.dataTransfer.getData("Text")));},
		onEdit:(id)=>{dispatch(editTodo(id))},
		onDelete:(id)=>{dispatch(deleteTodo(id))},
		onSave:(text,id)=>{if(text.length){dispatch(updateTodo(text,id))}},
		onCancel:(id)=>{dispatch(cancelTodo(id))}
	};
}

export default  connect(mapStateToProps,mapDispatchToProps)(listTodos);
