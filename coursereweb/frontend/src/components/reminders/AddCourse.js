import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addCourses} from '../../actions/reminderAction'
import { changeCourse } from "../../actions/dashboardAction"
import Popup from 'reactjs-popup'

export class AddCourse extends Component {
    state = {
       name: '',
       notes: 'Keep up the good work! ',
       info: 'A happy little course',
    }

    static propTypes = {
        addCourses: PropTypes.func.isRequired
    }

    onChange = e => this.setState({
        [e.target.name]:e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        this.setState({popup: false})
        const {name, notes, info} = this.state;
        const newCourse = {name, notes, info};
        this.props.addCourses(newCourse);
        this.closePopup();
    }
    
    openPopup = e => {
        this.setState({popup: true})
    }

    closePopup = e => {
        this.setState({
            name: '',
            notes: 'Keep up the good work! ',
            info: 'A happy little course',
            popup: false

        })
    }

    render() {
        const {name, notes, info} = this.state
        return (
            <Popup
                trigger={<button style={{backgroundColor: 'transparent', 
                    border:'none', borderRadius:'5px', outline:'none', width:'inherit', textAlign:'left' }}>
                        <h5 className="my-2" style={{border:'none', color:'var(--primary)'}}>Add New +</h5>
                    </button>}
                modal
                closeOnDocumentClick
                onOpen={this.openPopup}
                open={this.state.popup}
            >
                {close => (
                <div style={{padding:'20px'}}>
                <form onSubmit={this.onSubmit}>
                <fieldset>
                    {/* name of reminder  */}
                    <legend>Create a new course </legend>

                    {/* Course name  */}
                    <div className="form-group">
                        <label className="col-form-label" htmlFor="inputDefault">Name*</label>
                        <input name="name" type="text" value={name} onChange={this.onChange}
                            className="form-control"  id="inputDefault"/>
                    </div>

                    {/* Course info */}
                    <div className="form-group">
                        <label htmlFor="exampleSelect1">Course info</label>
                        <input name="info" type="text" className="form-control" id="inputDefault" placeholder="A happy little course" value={info} onChange={this.onChange}/>
                    </div>

                    {/* Special Notes */}
                    <div className="form-group">
                        <label className="col-form-label" htmlFor="inputDefault">Special notes for this course</label>
                        <textarea name="notes"  value={notes} onChange={this.onChange}
                            className="form-control"  rows="3"  id="exampleTextarea"  placeholder="Keep up the good work!"/>
                    </div>
                    
                    <p className="my-4">*Course details cannot be changed after it is created</p>

                    <div style={{justifyContent:'center', display:'flex'}}>
                        <button type="submit" style={{width:'150px', margin:'0px 10px 0px 10px'}} className="btn btn-primary">Create</button>
                        <button type="reset" onClick={this.closePopup} style={{width:'150px', margin:'0px 10px 0px 10px'}} className="btn btn-secondary">Discard</button>
                    </div>
                </fieldset>
                </form>
                                
                
            </div>
                )}
            </Popup>
        )
    }
}

export default connect(null, {addCourses, changeCourse})(AddCourse);