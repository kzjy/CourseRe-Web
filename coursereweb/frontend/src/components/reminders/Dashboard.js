import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import moment from 'moment';

import { getReminders, getCourses, organizeCourseReminders } from "../../actions//reminderAction";
import AddReminder from './AddReminder';
import AddCourse from './AddCourse';
import Course from './Course';
import DatePicker from 'react-datepicker';


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
            <div style={{margin:'10%', justifyContent:'center'}}>
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

const getCourseList = (state) => {

    var array = state.reminderReducer.courses.map(course => {
        
        return {
            course: course,
            reminders: state.reminderReducer.reminders.filter(reminder => {
                return reminder.course.id == course.id
            })
        }
    })
    
    console.log(array)
    return array;
}

const mapStateToProps = state => ({
    courseList: getCourseList(state)
});


export default connect(mapStateToProps, { getReminders, getCourses })(Dashboard);
