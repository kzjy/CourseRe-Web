import React, { Component } from 'react';
import Reminder from './Reminder';
import Form from './Form';

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>It's a me mario</h1>
                <Form/>
                <Reminder/>
            </div>
        )
    }
}

export default Dashboard
