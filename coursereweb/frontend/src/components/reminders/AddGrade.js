import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGrades } from '../../actions/reminderAction'
import { createMessage } from '../../actions/messagesAction'
import Popup from 'reactjs-popup'

export class AddGrade extends Component {
    state = {
       name: '',
       received: '',
       total: '',
       weight: '',
       category: 'Assignment',
    }

    onChange = e => this.setState({
        [e.target.name]:e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        this.setState({popup: false})
        const courseID = this.props.course
        const {name, received, total, weight, category } = this.state;
        const newGrade = {name, received, total, weight, category, course: courseID};
        if (this.checkValidData(newGrade)) {
            console.log('hello')
            this.props.addGrades(newGrade)
        }
        this.closePopup();
    
    }

    checkValidData = grade => {
        console.log({a: grade.received < 0, b: grade.course})
        if (grade.name === '') {
            this.props.createMessage({EmptyName: "Name cannot be blank"});
            return false
        } else if (grade.received === '' || grade.received < 0) {
            console.log('received')
            this.props.createMessage({EmptyField: "Received: invalid input"});
            return false
        } else if (grade.total === '' || grade.total < 0) {
            console.log('total')
            this.props.createMessage({EmptyField: "Total: invalid input"});
            return false
        } else if (grade.weight === '' || grade.weight < 0) {
            console.log('weight')
            this.props.createMessage({EmptyName: "Weight: invalid input"});
            return false
        } else if (grade.course === 0) {
            console.log('course')
            this.props.createMessage({EmptyName: "An error has occured, please try again"});
            return false
        }
        return true
    }
    
    openPopup = e => {
        this.setState({popup: true})
    }

    closePopup = e => {
        this.setState({
            name: '',
            received: '',
            total: '',
            weight: '',
            category: 'Assignment',
            popup: false

        })
    }

    getProgress = () => {

    }

    render() {
        const {name, received, total, weight} = this.state
        return (
            <Popup
                trigger={<button className="btn btn-lg btn-block" style={{backgroundColor: 'transparent', 
                border:'none', borderRadius:'5px', outline:'none' }}>
                        <h5 className="my-2" style={{border:'none', color:'var(--primary)'}}>Add Grade +</h5>
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
                    {/* Add grade */}
                    <legend>Add a new grade</legend>

                    {/* grade name  */}
                    <div className="form-group">
                        <label className="col-form-label" htmlFor="inputDefault">Name*</label>
                        <input name="name" type="text" value={name} onChange={this.onChange}
                            className="form-control"  id="inputDefault"/>
                    </div>
                    
                    {/* Grade category */}
                    <div className="form-group">
                        <label htmlFor="exampleSelect1">Category</label>
                        <select name="category" className="form-control" id="exampleSelect1"  onChange={this.onChange}>
                            <option value="Assignment">Assignment</option>
                            <option value="Test">Test</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Grade received */}
                    <div className="form-group">
                        <label htmlFor="exampleSelect1">Received*</label>
                        <input name="received" type="text" className="form-control" id="inputDefault" value={received} onChange={this.onChange}/>
                    </div>

                    {/* Grade total */}
                    <div className="form-group">
                        <label htmlFor="exampleSelect1">Total*</label>
                        <input name="total" type="text" className="form-control" id="inputDefault" value={total} onChange={this.onChange}/>
                    </div>

                    {/* Grade weight */}
                    <div className="form-group">
                        <label htmlFor="exampleSelect1">Weight*</label>
                        <input name="weight" type="text" className="form-control" id="inputDefault" value={weight} onChange={this.onChange}/>
                    </div>

                    <p className="my-4">*Grade details cannot be changed after it is created</p>

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

export default connect(null, {addGrades, createMessage})(AddGrade);