import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends React.Component{
		render(){
			return(
				<form onSubmit={(e)=>{
					e.preventDefault();
					if(!!this.input.value){
						this.props.dispatch(addTodo(this.input.value));
						this.input.value="";
					}
				}}>
					<input type="text" ref={(value)=>{this.input = value;}}/>
					<button type='submit'>AddTodo</button>
				</form>
			);
		}
}

export default connect()(AddTodo);