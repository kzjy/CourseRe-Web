import React, { Component } from 'react';
import { connect } from "react-redux";
import NavBar from './NavBar'

import { getReminders, getCourses } from "../../actions/reminderAction";

export class CalendarPage extends Component {

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
    
    render() {
        return (
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
                <NavBar style={{position:'fixed'}} location={this.props.location} history={this.props.history}/>
                <div className="py-4" style={{height:'100%', width:'100%', position:'absolute ' ,overflow:'auto', backgroundColor: 'rgba(255,255,255,0.9)' ,paddingLeft: `${this.getPadding()}px`}}>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    navStatus: state.navReducer,
});


export default connect(mapStateToProps, { getReminders, getCourses})(CalendarPage);

