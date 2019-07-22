// package imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { Provider  as AlertProvider } from 'react-alert';
// import AlertTemplate from 'react-alert-template-basic';
import AlertTemplate from './layouts/AlertTemplate';


// Actions
import { loadUser } from '../actions/authAction';

// Components
import Header from './layouts/Header';
import Dashboard from './layouts/Dashboard'
import Alerts from './layouts/Alerts';
import Register from './account/Register';
import Login from './account/Login';
import PrivateRoute from './other/PrivateRoute';
import Home from './layouts/Home';
import Calendar from './layouts/Calendar';

// alerts 
const alertOptions = {
    position: 'bottom center',
    timeout: 3000,
    offset: '300px',
}


class App extends React.Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render () {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
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
                    {/* <Header/> */}
                    <div >
                        <Switch>
                            <PrivateRoute exact path="/" component={Home}/>
                            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                            <PrivateRoute exact path="/calendar" component={Calendar}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/login" component={Login}/>
                        </Switch>

                    </div>
                    
                    <Alerts/>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))