import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';


import Header from './layouts/Header';
import Dashboard from './reminders/Dashboard'


class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <div style={{
                    position: 'fixed',
                    width:'100%',
                    height: '100%',
                    zIndex: '-99',
                    filter: 'blur(2px)',
                    WebkitFilter: 'blur(2px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Tint color
                    backgroundBlendMode: 'overlay',
                    // background-blend-mode: multiply;
                    backgroundImage: 'url(../../static/frontend/resources/default_bg.jpg)'}}/>
                <Header/>
                <Dashboard/>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))