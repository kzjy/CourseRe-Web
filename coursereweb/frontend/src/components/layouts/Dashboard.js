import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types'

import { getReminders, getCourses } from "../../actions/reminderAction";
import AddReminder from '../reminders/AddReminder';
import AddCourse from '../reminders/AddCourse';
import Course from '../reminders/Course';
import Header from './Header';
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import NavBar from './NavBar';
// Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';


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

    getPadding = () => {
        if (this.props.navStatus.window < 800) {
            return 64
        } else {
            if (this.props.navStatus.open) {
                return 250
            }
            return 64
        }
    }


    render() {
        return (
            <div>
                <div>
                    <div style={{
                    //  BACKGROUND
                    position: 'fixed',
                    width:'100%',
                    height: '100%',
                    zIndex: '-99',
                    backgroundColor: 'rgba(255, 255, 255, 0)', 
                    backgroundBlendMode: 'overlay',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundImage: 'url(../../static/frontend/resources/register_bg.jpg)'}}/>
                </div>
                <NavBar style={{position:'fixed'}} location={this.props.location} history={this.props.history}  />
                <div className="py-5" style={{ paddingLeft: `${this.getPadding()}px`}}>
                    <AddReminder/>
                    <AddCourse/>
                    {this.props.courseList && this.props.courseList.length > 0 ? this.props.courseList.map(course => {
                        
                        return <Course key={course.course.id} course_info={course}/>
                    }): ''
                    }

                </div>
                
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
    user: state.authReducer.user,
    navStatus: state.navReducer
});


export default connect(mapStateToProps, { getReminders, getCourses})(Dashboard);
