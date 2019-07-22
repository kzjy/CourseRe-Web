import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types'

import { getReminders, getCourses } from "../../actions/reminderAction";
import AddReminder from '../reminders/AddReminder';
import AddCourse from '../reminders/AddCourse';
import Course from '../reminders/Course';
import Header from './Header';


// DASHBOARD FOR DISPLAYING ALL ACTIVITIES 
export class Dashboard extends Component {
    
    static propTypes = {
        courseList: PropTypes.array.isRequired,
        getReminders: PropTypes.func,
        getCourses: PropTypes.func
    }

    componentDidMount() {
        this.props.getReminders();
        this.props.getCourses();
    }

    render() {
        return (
            <div style={{justifyContent:'center'}}>
                <Header dashboard="active" />
                
                <AddReminder/>
                <AddCourse/>
                {this.props.courseList && this.props.courseList.length > 0 ? this.props.courseList.map(course => {
                    
                    return <Course key={course.course.id} course_info={course}/>
                }): ''
                }
            </div>
        )
    }
}

// FILTER COURSES AND REMINDERS 
const getCourseList = (state) => {
    var array = state.reminderReducer.courses.map(course => {
        
        return {
            course: course,
            reminders: state.reminderReducer.reminders.filter(reminder => {
                return reminder.course.id == course.id
            })
        }
    })
    return array;
}

const mapStateToProps = state => ({
    courseList: getCourseList(state),
    user: state.authReducer.user
});


export default connect(mapStateToProps, { getReminders, getCourses})(Dashboard);
