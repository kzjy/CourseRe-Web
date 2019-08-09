import React, { Component } from 'react'
import Reminder from './Reminder'
import AddReminder from './AddReminder'


export class HomePanel extends Component {

    getFutureReminders = () => {
        if (!this.props.current.reminders) {
            return {futureReminders: [], pastReminders: []}
        };
        const today = new Date();
        const futureReminders = this.props.current.reminders.filter(reminder => {
            const reminderDate = new Date(reminder.due_date)
            return today < reminderDate
        });
        const pastReminders = this.props.current.reminders.filter(reminder => {
            const reminderDate = new Date(reminder.due_date)
            return today >= reminderDate
        });
        return {futureReminders, pastReminders};
    }

    render() {
        if (!this.props.current || !this.props.current.course) {
            return (<div>
                <h1 className="mx-auto my-3" style={{textAlign:'center', color:'var(--gray'}}>uwu! There's nothing here !</h1>
            </div>)
        }
        return (
            <div name="container" style={{display:'flex'}}>
                {/* Reminder informaation */}
                <div className="py-3 px-3 " style={{flex:'8'}}>
                    <h4>Upcoming reminders</h4>
                    <Reminder reminders={this.getFutureReminders().futureReminders}/>
                    <AddReminder course={(this.props.current.course) ? this.props.current.course.id : 1}/>
                    <h4 className="pt-5">Past reminders</h4>
                    <Reminder reminders={this.getFutureReminders().pastReminders}/>
                    <hr className="py-4"/>
                    {/* Button for deleting current course */}
                    <button type="button" className="btn btn-lg btn-block" style={{backgroundColor: 'transparent', margin:'auto',width:'90%', textAlign:'center',
                        border:'none', borderRadius:'5px', outline:'none', width:'inherit', textAlign:'left',float:'bottom' }} onClick={this.props.delete}>
                        <h5 className="my-2" style={{border:'none', color:'var(--secondary)'}}>Delete Course</h5>
                    </button>
                </div>

                {/* Special notes  */}
                <div className="py-3 px-3 border-left" style={{flex:'2'}}>
                    <h4>Course info</h4>
                    <hr/>
                    <p>{(this.props.current.course) ? this.props.current.course.info : 'None'}</p>
                    <h4>Notes</h4>
                    <hr/>
                    <p>{(this.props.current.course) ? this.props.current.course.notes : 'None'}</p>
                </div>

            </div>
        )
    }
}

export default HomePanel
