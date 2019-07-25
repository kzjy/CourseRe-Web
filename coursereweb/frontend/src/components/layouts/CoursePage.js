import React, { Component } from 'react';
import { connect } from 'react-redux';


export class CoursePage extends Component {


    render() {
        return (
            <div>
                <h1>{this.props.location.course.course.name}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    current: state.reminderReducer.courses,
})

export default connect(mapStateToProps, null)(CoursePage);
