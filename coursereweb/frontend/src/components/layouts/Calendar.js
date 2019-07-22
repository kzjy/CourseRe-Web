import React, { Component } from 'react'

import Header from './Header';

export class Calendar extends Component {
    render() {
        return (
            <div>
                <Header calendar="active"/>
            </div>
        )
    }
}

export default Calendar
