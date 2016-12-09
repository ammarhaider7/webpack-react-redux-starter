import React, { Component } from 'react';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/map';

export default class RxComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
	}

	componentDidMount() {
		
		Observable.ajax('https://jsonplaceholder.typicode.com/users')	
			.map(res => { return res.response })
			.subscribe(users => {
				this.setState({
					users
				})
			})

	}

	render() {
		return (
			<div>
				<ul className="rxComponent">
					{this.state.users.map(user => <li key={user.id}>{user.name}</li>)}
				</ul>
			</div>
		);
	}
}