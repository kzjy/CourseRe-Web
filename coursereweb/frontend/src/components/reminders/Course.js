import React, { Component } from 'react';
import { connect } from "react-redux";
import Reminder from './Reminder';
import { getCourses, deleteCourses } from "../../actions/reminderAction";

export class Course extends Component {

    render() {
        if (!this.props.course_info) {
            return (<div></div>)
        }
        return (
                <div>
                    {/* Navigation tabs  */}
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#grade">Grades</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#profile">Profile</a>
                        </li>
                    </ul>

                    {/* Tab content */}
                    <div id="myTabContent" class="tab-content" style={{overflow:'auto'}}>
                        {/* Home tab */}
                        <div class="px-2 py-2 tab-pane fade show active" id="home">
                            home
                        </div>

                        {/* Grade tab */}
                        <div class="px-2 py-2 tab-pane fade active" id="grade">
                            grade
                        </div>

                        {/* Profile tab */}
                        <div class="px-2 py-2 tab-pane fade active" id="profile">
                            profile
                        </div>
                        
                    </div>
                </div>
            // <div className="card border-primary mb-3" >
            //     <div className="card-header">
            //         <h4 className="card-title" style={{margin: '0'}}>{this.props.course_info.course.name}</h4>
            //         </div>
            //     <div className="card-body">
            //         <h6 className="card-title">{this.props.course_info.course.info}</h6>
            //         <Reminder reminders={this.props.course_info.reminders}/>
            //     </div>
            // </div>
                
        )
    }
}

export default Course
