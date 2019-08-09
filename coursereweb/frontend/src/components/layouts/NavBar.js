import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleNavbar, selectActive, updateWindow, hideNavbar } from '../../actions/navAction'
import { logout } from '../../actions/authAction'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export class NavBar extends Component {

    state = {
        selected: '',
    }

    onSelect = selected => {
        if (selected === 'logout') {
            this.props.logout();
        } else {
            this.props.selectActive(selected)
            const to = '/' + selected;
            if (this.props.location.pathname !== to) {
                this.props.history.push(to);
            }
        }
    }

    componentDidMount() {
        this.props.updateWindow(window.innerWidth);
        window.addEventListener('resize', this.update);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.update);
    }

    update = () => {
        if (Math.abs(window.innerWidth - this.props.navStatus.window) > 150) {
            this.props.updateWindow(window.innerWidth);
            if (window.innerWidth < 800) {
                this.props.hideNavbar()
            }
        }
    }

    render() {
        return (
            <SideNav style={{position:'fixed', backgroundColor:'rgba(120,194,173,0.9)'}} expanded={this.props.navStatus.open} onToggle={this.props.toggleNavbar} onSelect={this.onSelect}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="">

                    {/* HOME  */}
                    <NavItem navitemClassName="nav-item" eventKey="">
                        <NavIcon >
                            <i className="fas fa-home" style={{color:'#FFF', fontSize: '1.75em' }}></i>
                            {/* <i className="fa fa-fw fa-home"  /> */}
                        </NavIcon>
                        <NavText style={{color:'#FFF'}}>Home</NavText>
                        
                    </NavItem>

                    {/* DASHBOARD */}
                    <NavItem eventKey="dashboard">
                        <NavIcon>
                        <i className="fas fa-stream" style={{ color:'#FFF', fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText style={{color:'#FFF'}}>Dashboard</NavText>
                    </NavItem>

                    {/* FAVOURITES */}
                    {/* <NavItem eventKey="favourites">
                        <NavIcon>
                        <i className="far fa-star" style={{color:'#FFF', fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText style={{color:'#FFF'}}>Favourites</NavText>
                    </NavItem> */}

                    <hr/>

                    {/* LOGOUT */}
                    <NavItem eventKey="logout">
                        <NavIcon>
                            <i className="fas fa-sign-out-alt" style={{color:'#FFF', fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText style={{color:'#FFF'}}>Logout</NavText>
                    </NavItem>
                </SideNav.Nav>

            </SideNav>
        )
    }
}

const mapStateToProps = state => ({
    navStatus: state.navReducer
})

export default connect(mapStateToProps, { toggleNavbar, selectActive, updateWindow, logout, hideNavbar })(NavBar);