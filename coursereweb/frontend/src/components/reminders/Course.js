import React, { Component } from 'react';
import { connect } from "react-redux";
import Reminder from './Reminder';
import { getCourses, deleteCourses } from "../../actions/reminderAction";

export class Course extends Component {

    render() {
        return (
            <div className="card border-primary mb-3" >
                <div className="card-header">
                    <h4 className="card-title" style={{margin: '0'}}>{this.props.course_info.course.name}</h4>
                    </div>
                <div className="card-body">
                    <h6 className="card-title">{this.props.course_info.course.info}</h6>
                    <Reminder reminders={this.props.course_info.reminders}/>
                </div>
            </div>
                
        )
    }
}

export default Course
