import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


export class Alerts extends Component {

    static propTypes = {
        error : PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prev) {
        const { error, alert, message } = this.props;
        if (error !== prev.error) {
            if (error.message.name) {
                alert.show(`Name: ${error.message.name.join()}`)
            }
            if (error.message.total) {
                alert.show(`Total: ${error.message.total.join()}`)
            }
        }

        if (message !== prev.message) {
            if (message.reminderDeleted) {
                alert.success("Sucessfully deleted")
            }
            if (message.reminderAdded) {
                alert.success('Successfully added ')
            }
        }

    }

    render() {
        return (
            <Fragment/>
        )
    }
}

const mapStateToProps = state => ({
    error: state.errorsReducer,
    message: state.messagesReducer
})

export default connect(mapStateToProps)(withAlert()(Alerts));
