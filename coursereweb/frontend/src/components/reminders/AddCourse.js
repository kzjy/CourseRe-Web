import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addCourses} from '../../actions/reminderAction'
import Popup from 'reactjs-popup'

export class AddCourse extends Component {
    state = {
       name: '',
       notes: '',
       info: '',
    }

    static propTypes = {
        addCourses: PropTypes.func.isRequired
    }

    onChange = e => this.setState({
        [e.target.name]:e.target.value
    });

    onSubmit = e => {
        console.log('submit')
        e.preventDefault();
        this.setState({popup: false})
        const {name, notes, info} = this.state;
        const newCourse = {name, notes, info};
        this.props.addCourses(newCourse);
        
        this.closePopup()
    }
    
    openPopup = e => {
        this.setState({popup: true})
    }

    closePopup = e => {
        this.setState({
            name: '',
            notes: '',
            info: '',
            popup: false

        })
    }

    render() {
        const {name, notes, info} = this.state
        return (
            <Popup
                trigger={<button type="button" className="btn btn-primary btn-lg btn-block" style={{margin:'5%', width:'90%'}}>Create New Course + </button>}
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
                        <label className="col-form-label" htmlFor="inputDefault">Name</label>
                        <input name="name" type="text" value={name} onChange={this.onChange}
                            className="form-control"  id="inputDefault"/>
                    </div>

                    {/* course 
                    <div className="form-group">
                        <label htmlFor="exampleSelect1">Course</label>
                        <select name="course" className="form-control" id="exampleSelect1" value={course} onChange={this.onChange}>
                            <option>Assignment</option>
                            <option>Meet up</option>
                            <option>Test</option>
                            <option>Study</option>
                        </select>
                    </div> */}

                    {/* Course info */}
                    <div className="form-group">
                        <label htmlFor="exampleSelect1">Course info</label>
                        {/* <select name="reminder_type" className="form-control" id="exampleSelect1" value={reminder_type} onChange={this.onChange}>
                            <option>Assignment</option>
                            <option>Meet up</option>
                            <option>Test</option>
                            <option>Study</option>
                        </select> */}
                        <textarea name="info" className="form-control" id="exampleTextarea" rows="3" value={info} onChange={this.onChange}></textarea>
                    </div>

                    {/* Special Notes */}
                    <div className="form-group">
                        <label className="col-form-label" htmlFor="inputDefault">Special Notes</label>
                        <input name="notes" type="text" value={notes} onChange={this.onChange}
                            className="form-control"  id="inputDefault"/>
                    </div>
                    
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

export default connect(null, {addCourses})(AddCourse);