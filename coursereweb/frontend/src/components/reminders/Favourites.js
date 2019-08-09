import React, { Component } from 'react'
import NavBar from '../layouts/NavBar'
import { connect } from 'react-redux'

export class Favourites extends Component {

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

    getFavouriteItem = () => {
        return (
        <div>

        </div>)
    }

    render() {
        return (
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
                    <NavBar style={{position:'fixed'}} location={this.props.location} history={this.props.history}/>
                    <div className="py-4" style={{height:'100%', width:'100%', position:'absolute ' ,overflow:'auto', backgroundColor: 'rgba(255,255,255,0.9)' ,paddingLeft: `${this.getPadding()}px`}}>
                        <div className="px-5">
                            <h1>Favourites</h1>
                            <hr/>

                        </div>
                    </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    navStatus: state.navReducer
})

export default connect(mapStateToProps, null)(Favourites);
