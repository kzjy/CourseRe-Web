import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Link, NavLink, Route, Switch } from 'react-router-dom';

import { getReminders, getCourses } from "../../actions/reminderAction";
import AddReminder from '../reminders/AddReminder';
import AddCourse from '../reminders/AddCourse';
import Course from '../reminders/Course';
import Header from './Header';
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import NavBar from './NavBar';
import { Home } from './Home';
import { Calendar } from './Calendar';
import { Login } from '../account/Login';
import CoursePage from './CoursePage';
import PrivateRoute from '../other/PrivateRoute';
// Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';


// DASHBOARD FOR DISPLAYING ALL ACTIVITIES 
export class Dashboard extends Component {

    state = {
        visible: 'visible',
        selected: null,
    }
    
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
                return 240
            }
            return 64
        }
    }

    // TOGGLE COURSE SELECT OPEN
    toggleCourses = () => {
        this.setState({visible: (this.state.visible === 'visible') ? 'collapse' : 'visible'})
    }

    componentDidMount = () => {
        if (this.props.courseList.length > 0) {
            this.setState({selected: this.props.courseList[0]})
        }
        window.addEventListener('resize', this.update);
    }

    update = () => {
        if (window.innerWidth < 800 && this.state.visible === 'visible') {
            this.toggleCourses();
        }
    }

    selectCourse = (e) => {
        // e.preventDefault()
        const course = this.props.courseList.filter(course => {
            // console.log(course.course.id)
            return course.course.id == e.currentTarget.name
        })
        // console.log(course)
        this.setState({selected: course[0]})
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
                    <NavBar style={{position:'fixed'}} location={this.props.location} history={this.props.history}/>
                    <div className="py-4" style={{height:'100%', width:'100%', position:'absolute ' ,overflow:'auto', backgroundColor: 'rgba(255,255,255,0.9)' ,paddingLeft: `${this.getPadding()}px`}}>
                        <div className="px-5">

                            <div className="row">
                                <button  style={{backgroundColor: 'transparent', border:'none', outline:'none'}} onClick={this.toggleCourses}>
                                    <i className="fas fa-align-left mx-3" style={{fontSize:'2em'}} ></i>
                                </button>
                                <h1 className="mt-2">Dashboard</h1>
                            </div>
                        
                            <hr/>

                            <div style={{display:'flex'}}>
                            {/* COURSE SELECTION ON THE LEFT*/}
                            <div className="border-right border-primary pr-3" style={{display: `${(this.state.visible === 'visible') ? 'inline-block' : 'none'}`, width:'200px', height:'100%', flex:'1'}}>
                                <h4>Courses</h4>
                                <hr/>
                                {/* Display the active courses */}
                                {this.props.courseList && this.props.courseList.length > 0 ? this.props.courseList.map(course => {
                                    return (<div key={course.course.id} className="course-button" style={{width:'100%', borderRadius:'5px'}}>
                                        <button  name={course.course.id} onClick={this.selectCourse} style={{backgroundColor: `${this.state.selected === course ? 'var(--primary)' : 'transparent'}`, 
                                                border:'none', borderRadius:'5px', outline:'none', width:'inherit', textAlign:'left' }}>
                                            <div >
                                                <h5 className="my-2" style={{border:'none', color:`${this.state.selected === course ? 'white' : 'var(--gray)'}`}}>{course.course.name}</h5>
                                            </div>
                                        </button>
                                    </div>)
                                }) :''}

                                {/* Button for adding new course  */}
                                <div style={{width:'100%', borderRadius:'5px'}}>
                                    <button  name='add' onClick={this.addCourse} style={{backgroundColor: 'transparent', 
                                            border:'none', borderRadius:'5px', outline:'none', width:'inherit', textAlign:'left' }}>
                                        <div >
                                            <h5 className="my-2" style={{border:'none', color:'var(--primary)'}}>Add New +</h5>
                                        </div>  
                                    </button>
                                </div>
                            </div>
                        

                            {/* COURSE PAGE DISPLAY ON RIGHT */}
                            <div className="px-2" style={{display:'inline-block', flex:'5'}}> 
                                <Course  course_info={this.state.selected}/>
                            </div>

                            </div>
                        </div>
                    
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
