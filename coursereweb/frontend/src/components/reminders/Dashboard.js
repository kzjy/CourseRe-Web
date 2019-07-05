import React, { Component } from 'react';
import Reminder from './Reminder';
import AddReminder from './AddReminder';
import Course from './Course'

export class Dashboard extends Component {
    render() {
        return (
            <div style={{margin:'10%', float:'center'}}>
                <h1>Dashboard</h1>
                <AddReminder/>
                <h2> Reminders</h2>
                <Course/>
            </div>
        )
    }
}

export default Dashboard;
