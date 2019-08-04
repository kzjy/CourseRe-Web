import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getGrades, deleteGrades } from "../../actions/reminderAction";

export class Grade extends Component {

  simplifyTime = (datetime) => {
    const localDate = new Date(datetime);
    return localDate.toDateString() + ' at ' + localDate.toLocaleTimeString();

  }

  render() {
    return (
      <Fragment>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Received</th>
              <th scope="col">Total</th>
              <th scope="col">Weight</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {(this.props.grades) ? this.props.grades.map(grade => (
                <tr className="table-default" key={grade.id}>
                    <td>{grade.name}</td>
                    <td>{grade.category}</td>
                    <td>{grade.received}</td>
                    <td>{grade.total}</td>
                    <td>{grade.weight}</td>
                    <td>
                        <button onClick={this.props.deleteGrades.bind(this, grade.id)} type="button" className="btn btn-secondary">Delete</button>
                    </td>
                </tr>
            )): <tr></tr>}
          </tbody>
        </table>
        
      </Fragment>
    );
  }
}

export default connect(null, { deleteGrades })(Grade);