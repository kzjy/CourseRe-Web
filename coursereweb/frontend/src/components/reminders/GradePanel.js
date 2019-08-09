import React, { Component } from 'react'
import Grade from './Grade'
import AddGrade from './AddGrade'

export class GradePanel extends Component {

    // Calculate grade average
    getAverages = () => {
        if (!this.props.current.grades) {
            return {current: 0, assignment: 0, test: 0, other: 0}
        }

        var assignmentCurrentWeight = 0;
        var assignmentTotalWeight = 0;
        var testCurrentWeight = 0;
        var testTotalWeight = 0;
        var otherCurrentWeight = 0;
        var otherTotalWeight = 0;

        for (const grade of this.props.current.grades) {
            switch (grade.category) {
                case 'Assignment':
                    assignmentCurrentWeight += (grade.received/grade.total) * grade.weight;
                    assignmentTotalWeight += grade.weight;
                    break;
                case 'Test':
                    testCurrentWeight += (grade.received / grade.total) * grade.weight;
                    testTotalWeight += grade.weight;
                    break;
                case 'Other':
                    otherCurrentWeight += (grade.received / grade.total) * grade.weight;
                    otherTotalWeight += grade.weight;
                    break;
                default:
                    ;
            }
        }
    

        const assignmentAverage = (assignmentTotalWeight !== 0) ? (100 * assignmentCurrentWeight / assignmentTotalWeight).toFixed(2) : 0;
        const testAverage = (testTotalWeight !== 0) ? (100 * testCurrentWeight / testTotalWeight).toFixed(2) : 0;
        const otherAverage = (otherTotalWeight !== 0) ? (100 * otherCurrentWeight / otherTotalWeight).toFixed(2) : 0;

        const currentAverage = (assignmentTotalWeight + testTotalWeight + otherTotalWeight !== 0) ? 
            (100 * (assignmentCurrentWeight + testCurrentWeight + otherCurrentWeight) / (assignmentTotalWeight + testTotalWeight + otherTotalWeight)).toFixed(2) : 0;

        return {assignmentAverage, testAverage, otherAverage, currentAverage}
    }

    // Calculate course progress 
    getProgress = () => {
        if (!this.props.current.grades) {
            return 0
        }
        var sum = 0;
        for (const grade of this.props.current.grades) {
            sum += grade.weight
        }
        if (sum > 100) {
            sum = 100
        }
        return sum
    }


    getProgressColor = (average) => {
        if (average >= 80) {
            return "progress-bar"
        } else if (average >= 60) {
            return "progress-bar bg-warning"
        } else {
            return "progress-bar bg-danger"
        }
    }

    render() {
        // No data 
        if (!this.props.current || !this.props.current.course) {
            return (<div>
                <h1 className="mx-auto my-3" style={{textAlign:'center', color:'var(--gray'}}>uwu! There's nothing here !</h1>
            </div>)
        }

        const {assignmentAverage, testAverage, otherAverage, currentAverage } = this.getAverages();
        return (
            
            <div name="container " style={{display:'flex'}}>
                {/* Main display */}
                <div className="py-3 px-3 " style={{flex:'8'}}>
                    {/* Course progress bar */}
                    <h4>Course Progress</h4>
                    <hr/>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width:`${this.getProgress()}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4 className="pt-5">Grades</h4>

                    {/* Grade table */}
                    <Grade grades={(this.props.current.course) ? this.props.current.grades : []} 
                            course={(this.props.current.course) ? this.props.current.course.id : 0}/>
                    <AddGrade course={(this.props.current.course) ? this.props.current.course.id : 0}/>
                </div>

                {/* Side panels */}
                <div className="py-3 px-3 border-left" style={{flex:'2'}}>
                    {/* Current average  */}
                    <h4>Average</h4>
                    <hr/>
                    <h6>Current: {currentAverage}%</h6>
                    <div className="progress">
                        <div className={this.getProgressColor(currentAverage)} role="progressbar" style={{width:`${currentAverage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    {/* Average by category  */}
                    <h4 className="pt-3">By Category</h4>
                    <hr/>
                    {/* Assignment */}
                    <h6>Assignment: {assignmentAverage}%</h6>
                    <div className="progress mb-4">
                        <div className={this.getProgressColor(assignmentAverage)} role="progressbar" style={{width:`${assignmentAverage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    {/* Test */}
                    <h6>Test: {testAverage}%</h6>
                    <div className="progress mb-4">
                        <div className={this.getProgressColor(testAverage)} role="progressbar" style={{width:`${testAverage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    {/* Other */}
                    <h6>Other: {otherAverage}%</h6>
                    <div className="progress mb-4">
                        <div className={this.getProgressColor(otherAverage)} role="progressbar" style={{width:`${otherAverage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GradePanel
