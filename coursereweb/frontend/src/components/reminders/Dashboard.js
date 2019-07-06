import React, { Component } from 'react';
import AddReminder from './AddReminder';
import Course from './Course'

export class Dashboard extends Component {
    render() {
        return (
            <div style={{margin:'10%', justifyContent:'center'}}>
                <h1>Dashboarddddddd </h1>
                <AddReminder/>
                <h2> Reminders</h2>
                <Course/>
            </div>
        )
    }
}

export default Dashboard;
