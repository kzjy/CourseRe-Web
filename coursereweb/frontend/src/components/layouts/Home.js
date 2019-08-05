import React, { Component } from 'react'
import { connect } from 'react-redux';
// import Header from './Header';
// import { Calendar } from 'react-calendar';
import Calendar from 'react-calendar/dist/entry.nostyle';
import NavBar from './NavBar'

export class Home extends Component {

    state = {
        date: new Date()
    }

    comingUpItem = reminder => {
        const time = new Date(reminder.due_date);
        const localTime = time.toDateString() + ' at ' + time.toLocaleTimeString();
        return (
            <div key={reminder.id}>
                <hr/>
                <h5>{reminder.course.name} : {reminder.name}</h5>
                <p>{localTime}</p>
            </div>
        )
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

    render() {
        return (
            <div style={{position:'relative'}}>
                
                <NavBar location={this.props.location} history={this.props.history}/>
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
                {/* EVERYTHING ELSE */}
                <div className="py-5" style={{ paddingLeft: `${this.getPadding()}px`}}>
                {/* <Header home="active"/> */}
                
                    <div className="jumbotron border border-primary mx-3 mx-sm-4 mx-xl-5 " style={{backgroundColor:'rgba(255,255,255,0.7)'}}>
                        <h1 className="display-3">Hello, {this.props.user.first_name}</h1>
                        <hr className="my-4 border-primary"/>
                        
                        <div className="row">
                            
                            <div className="col-md-7 col-xl-9 border-right border-primary">
                                <h4>Coming up today ...</h4>
                                {
                                    (this.props.remindersToday.length > 0) ? this.props.remindersToday.map(reminder => this.comingUpItem(reminder)): 
                                    (<h6 className="mt-3">Nothing to do</h6>)
                                }
                                <br/>
                                <h4>Coming up this week ...</h4>
                                {
                                    (this.props.remindersWeek.length > 0) ? this.props.remindersWeek.map(reminder => this.comingUpItem(reminder)): 
                                    (<h6 className="mt-3">Nothing to do</h6>)
                                }
                                <br/>
                            </div>
                            <div className="col-md-5 col-xl-3">
                                <h4>Calendar </h4>
                                <hr/>
                                <Calendar className="m-auto" value={this.state.date} style={{color:'black'}}/>
                            </div>
                        </div>
                    </div> 
                    
                </div>
            </div>
        )
    }
}


const reminderTodayFilter = (state) => {
    const today = new Date();
    return state.reminderReducer.reminders.filter(reminder => {
        const due_date = new Date(reminder.due_date)
        return today.getDate() === due_date.getDate() && 
                today.getMonth() === due_date.getMonth() &&
                today.getFullYear() === due_date.getFullYear()
    })
}

const reminderWeekFilter = (state) => {
    const today = new Date();
    var week = new Date();
    week = week.setDate(week.getDate() + 7);
    return state.reminderReducer.reminders.filter(reminder => {
        const due_date = new Date(reminder.due_date);
        return week > due_date  &&
                today < due_date && 
                today.getDate() !== due_date.getDate();
    })
}


const mapStateToProps = state => ({
    user: state.authReducer.user,
    remindersWeek: reminderWeekFilter(state),
    remindersToday: reminderTodayFilter(state),
    navStatus: state.navReducer
});

export default connect(mapStateToProps, null)(Home);
