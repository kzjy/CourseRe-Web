import React, { Component } from 'react'

export class AddReminder extends Component {
    state = {
        name: '',
        reminder_type: '',
        // due_date: '',
        total: 100,
        received: 0,
        weight: 100,
        course: ''
    }

    onChange = e => this.setState({
        [e.target.name]:e.target.value
    });

    onSubmit = e => {
        e.preventDefault();

    }

    render() {
        const {name, reminder_type, total, received, weight, course} = this.state
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <fieldset>
                    {/* name of reminder  */}
                    <legend>Add a new reminder</legend>
                    <div className="form-group">
                        <label className="col-form-label" htmlFor="inputDefault">Reminde me to ...</label>
                        <input name="name" type="text" value={name} onChange={this.onChange}
                            className="form-control" placeholder="Default input" id="inputDefault"/>
                    </div>

                    {/* course  */}
                    <div className="form-group">
                        <label htmlFor="exampleSelect1">Course</label>
                        <select name="course" className="form-control" id="exampleSelect1" value={course} onChange={this.onChange}>
                            <option>Assignment</option>
                            <option>Meet up</option>
                            <option>Test</option>
                            <option>Study</option>
                        </select>
                    </div>

                    {/* type of reminder  */}
                    <div className="form-group">
                        <label htmlFor="exampleSelect1">Reminder type</label>
                        <select name="reminder_type" className="form-control" id="exampleSelect1" value={reminder_type} onChange={this.onChange}>
                            <option>Assignment</option>
                            <option>Meet up</option>
                            <option>Test</option>
                            <option>Study</option>
                        </select>
                    </div>

                    {/* received  */}
                    <div className="form-group">
                        <label className="col-form-label" htmlFor="inputDefault">Received*</label>
                        <input name="received" type="text" value={received} onChange={this.onChange}
                            className="form-control" placeholder="Default input" id="inputDefault"/>
                    </div>

                    {/* total  */}
                    <div className="form-group">
                        <label className="col-form-label" htmlFor="inputDefault">Total</label>
                        <input name="total" type="text" value={total} onChange={this.onChange}
                            className="form-control" placeholder="Default input" id="inputDefault"/>
                    </div>

                    {/* weight */}
                    <div className="form-group">
                        <label className="col-form-label" htmlFor="inputDefault">Weight</label>
                        <input name="weight" type="text" value={weight} onChange={this.onChange}
                            className="form-control" placeholder="Default input" id="inputDefault"/>
                    </div>

                    {/* <div className="form-group">
                        <label for="exampleTextarea">Example textarea</label>
                        <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div> */}

                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </fieldset>
                </form>
            </div>
        )
    }
}

export default AddReminder
