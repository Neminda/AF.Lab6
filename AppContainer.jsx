'use strict';
//changed
import React, {Component} from 'react';
import Users from './Users';

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [{
                id: Date.now(),
                name: 'John'
            }]
        }
    }

    addUser(user) {
        this.setState({
            users: this.state.users.concat({id: Date.now(), name: user.name})
        })
    }

    render() {
        return <div>
            <h2>Users App</h2>
            <Users users={this.state.users}/>
        </div>;
    }
}
