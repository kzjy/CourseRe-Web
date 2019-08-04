import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getReminders, deleteReminders } from "../../actions/reminderAction";

export class Reminder extends Component {
  // static propTypes = {
  //   reminders: PropTypes.array.isRequired,
  //   getReminders: PropTypes.func,
  //   deleteReminders: PropTypes.func
  // };


  simplifyTime = (datetime) => {
    const localDate = new Date(datetime);
    return localDate.toDateString() + ' at ' + localDate.toLocaleTimeString();

  }

  simplifyStatus = (status) => {
    const state = ( status ? 'Complete' : 'Not complete');
    return state;
  }

  render() {
    return (
      <Fragment>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Due</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {(this.props.reminders) ? this.props.reminders.map(reminder => (
                <tr className="table-default" key={reminder.id}>
                    <td>{reminder.name}</td>
                    <td>{reminder.reminder_type}</td>
                    <td>{this.simplifyTime(reminder.due_date)}</td>
                    <td>{this.simplifyStatus(reminder.status)}</td>
                    <td>
                        <button onClick={this.props.deleteReminders.bind(this, reminder.id)} type="button" className="btn btn-secondary">Delete</button>
                    </td>
                </tr>
            )): <tr></tr>}
          </tbody>
        </table>
        
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  reminders: state.reminderReducer.reminders
});

export default connect(null, { deleteReminders })(Reminder);
