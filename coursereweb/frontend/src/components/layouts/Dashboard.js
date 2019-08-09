import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { getReminders, getCourses } from "../../actions/reminderAction";
import { changeCourse } from "../../actions/dashboardAction";
import AddCourse from '../reminders/AddCourse';
import Course from '../reminders/Course';
import NavBar from './NavBar';

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
            this.props.changeCourse(this.props.courseList[0].id)
        }
        window.addEventListener('resize', this.update);
    }

    update = () => {
        if (window.innerWidth < 800 && this.state.visible === 'visible') {
            this.toggleCourses();
        }
    }

    selectCourse = (e) => {
        const course = this.props.courseList.filter(course => {
            return course.id == e.currentTarget.id
        })
        this.props.changeCourse(course[0].id)
    }

    getButtonBg = (course) => {
        if (this.props.selected) {
            if (this.props.selected === course.id) {
                return 'var(--primary)'
            }
        }
        return 'transparent'
    }

    getButtonTxt = (course) => {
        if (this.props.selected) {
            if (this.props.selected === course.id) {
                return 'white'
            }
        }
        return 'var(--gray)'
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
                    {/* side bar */}
                    <NavBar style={{position:'fixed'}} location={this.props.location} history={this.props.history}/>
                    <div className="py-4" style={{height:'100%', width:'100%', position:'absolute ' ,overflow:'auto', backgroundColor: 'rgba(255,255,255,0.9)' ,paddingLeft: `${this.getPadding()}px`}}>
                        <div className="px-5">
                            {/* heading */}
                            <div className="row" style={{overflow:'visible'}}>
                                <button style={{backgroundColor: 'transparent', border:'none', outline:'none'}} onClick={this.toggleCourses}>
                                    <i className="fas fa-align-left mx-3" style={{fontSize:'2em'}} ></i>
                                </button>
                                <h1 >Dashboard</h1>
                            </div>
                        
                            <hr/>

                            <div style={{display:'flex'}}>
                            {/* COURSE SELECTION ON THE LEFT*/}
                            <div className="border-right border-primary pr-3" style={{display: `${(this.state.visible === 'visible') ? 'inline-block' : 'none'}`, minWidth:'200px', height:'100%', flex:'1'}}>
                                <h4>Courses</h4>
                                <hr/>
                                {/* Display the active courses */}
                                {this.props.courseList && this.props.courseList.length > 0 ? this.props.courseList.map(course => {
                                    return (<div key={course.id} className="course-button" style={{width:'100%', borderRadius:'5px'}}>
                                        <button  id={course.id} onClick={this.selectCourse} style={{backgroundColor: `${this.getButtonBg(course)}`, 
                                                border:'none', borderRadius:'5px', outline:'none', width:'inherit', textAlign:'left' }}>
                                            <div >
                                                <h5 className="my-2" style={{border:'none', color:`${this.getButtonTxt(course)}`}}>{course.name}</h5>
                                            </div>
                                        </button>
                                    </div>)
                                }) :''}

                                {/* Button for adding new course */}
                                <AddCourse/>
                            </div>
                        

                            {/* COURSE PAGE DISPLAY ON RIGHT */}
                            <div className="px-2" style={{display:'inline-block', flex:'8'}}> 
                                <Course/>
                            </div>

                            </div>
                        </div>
                    
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    courseList: state.reminderReducer.courses,
    user: state.authReducer.user,
    navStatus: state.navReducer,
    selected: state.dashboardReducer.selected
});


export default connect(mapStateToProps, { getReminders, getCourses, changeCourse })(Dashboard);
