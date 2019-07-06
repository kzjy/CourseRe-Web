import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';

import { Provider  as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layouts/Header';
import Dashboard from './reminders/Dashboard'
import Alerts from './layouts/Alerts';


// alerts 
const alertOptions = {
    position: 'top center',
    timeout: 3000,
    offset: '50px'
}


class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    {/* <div style={{
                        position: 'fixed',
                        width:'100%',
                        height: '100%',
                        zIndex: '-99',
                        filter: 'blur(2px)',
                        WebkitFilter: 'blur(2px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.4)', // Tint color
                        backgroundBlendMode: 'overlay',
                        backgroundImage: 'url(../../static/frontend/resources/default_bg.jpg)'}}/> */}
                    <Header/>
                    
                    <Dashboard/>
                    <Alerts/>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))