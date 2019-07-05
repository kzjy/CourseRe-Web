import React from 'react';
import ReactDOM from 'react-dom';

import Header from './layouts/Header';
import Dashboard from './reminders/Dashboard'

class App extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <Dashboard/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))