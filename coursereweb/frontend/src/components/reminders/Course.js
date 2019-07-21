import React, { Component } from 'react';
import { connect } from "react-redux";
import Reminder from './Reminder';
import { getCourses, deleteCourses } from "../../actions/reminderAction";

export class Course extends Component {

    render() {
        return (
            <div>
                {/* {console.log(this.props.course_info)} */}
                <h1>{this.props.course_info.course.name}</h1>
                <Reminder reminders={this.props.course_info.reminders}/>
            </div>
        )
    }
}

export default Course
