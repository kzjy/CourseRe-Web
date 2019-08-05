import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteCourses } from "../../actions/reminderAction";
import { changeCourse } from "../../actions/dashboardAction";
import HomePanel from './HomePanel';
import GradePanel from './GradePanel';
import StatisticsPanel from './StatisticsPanel';

export class Course extends Component {

    delete = () => {
        this.props.deleteCourses(this.props.current.course.id);
        this.props.changeCourse(null)
    }

    render() {
        if (!this.props.current) {
            return (<div>
                <h1 className="mx-auto my-3" style={{textAlign:'center', color:'var(--gray'}}>uwu! There's nothing here !</h1>
            </div>)
        }
        return (
                <div>
                    {/* Navigation tabs  */}
                    <ul className="nav nav-tabs">
                        <li className="mr-4 ml-1">
                            <h3>{(this.props.current.course) ? this.props.current.course.name : ''}</h3>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#grade">Grades</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#profile">Statistics</a>
                        </li> */}
                    </ul>

                    {/* Tab content */}
                    <div id="myTabContent" className="tab-content" style={{overflow:'auto'}}>
                        {/* Home tab */}
                        <div className="px-2 py-2 tab-pane fade show active" id="home">
                            <HomePanel current={this.props.current} delete={this.delete}/>

                        </div>

                        {/* Grade tab */}
                        <div className="px-2 py-2 tab-pane fade" id="grade">
                            <GradePanel current={this.props.current}/>
                        </div>

                        {/* Profile tab */}
                        {/* <div className="px-2 py-2 tab-pane fade" id="profile">
                            <StatisticsPanel current={this.props.current}/>
                        </div> */}
                        
                    </div>
                </div> 
        )
    }
}

const getCurrentInfo = (state) => {
    if (!state.dashboardReducer.selected) {
        return {course: null, reminders: null}
    }
    const course = state.reminderReducer.courses.filter(course => course.id === state.dashboardReducer.selected)[0]
    const reminders = state.reminderReducer.reminders.filter(reminder => reminder.course.id === course.id)
    const grades = state.reminderReducer.grades.filter(grade => grade.course.id === course.id)
    return {course, reminders, grades}
}

const mapStateToProps = (state) => ({
    courseSelection: state.reminderReducer.courses,
    current: getCurrentInfo(state)
})

export default connect(mapStateToProps, {deleteCourses, changeCourse})(Course);
