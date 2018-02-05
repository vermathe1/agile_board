import React from 'react';
import List from './list';
class showTodo extends React.Component{
		render(){
			return(
				<div className="showTodos">
					<List status="incomplete" />
					<List status="inprogress" />
					<List status="done"/>
				</div>
			);
		}
}
export default showTodo;