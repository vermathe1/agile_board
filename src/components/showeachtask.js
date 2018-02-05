import React from 'react';

class listTodos extends React.Component{
	constructor(props){
		super(props);
		this.renderList = this.renderList.bind(this);
		this.list = this.list.bind(this);
		this.editInput = this.editInput.bind(this);
	}
		render(){
			return(
				<this.renderList isEditing={this.props.todo.isEditing} />				
			);
		}

		renderList(props){
			const isEditing = props.isEditing;
			if(!isEditing){
				return <this.list/>
			}
			return <this.editInput/>
		}

		list(){
			return(
					<li draggable="true" id={this.props.todo.id} onDragStart={this.props.onDragStart}> <span>{this.props.todo.text} </span>
						<span>
							<button type= "button" onClick={e=>this.props.onEdit()}>Edit</button>
							<button type= "button" onClick={e=>this.props.onDelete()}>Delete</button>
						</span>
					</li>
			);
		}

		editInput(){
			return(
				<li>
					<input type="text" ref={(value)=>{this.input=value;}} defaultValue={this.props.todo.text}/>
					<span>
						<button type= "button" onClick={e=>this.props.onSave(this.input.value,this.props.todo.id)}>Save</button>
						<button type= "button" onClick={e=>this.props.onCancel()}>Cancel</button>
					</span>
				</li>
			);
			
		}

}

export default listTodos;