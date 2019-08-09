import React, { Component } from 'react'
import { Chart } from 'react-charts'

export class StatisticsPanel extends Component {

    getData = () => {
        if (!this.props.current) {
            return [{label: 'Grades',
                        data: []}]
        }
        var data = [];
        var currentWeight = 0;
        var totalWeight = 0;

        for (const grade of this.props.current.grades) {
            currentWeight += (grade.received / grade.total) * grade.weight;
            totalWeight += grade.weight;
            let avg = ( 100 * currentWeight / totalWeight ).toFixed(2);
            data.push({x: grade.date, y: avg})
        }
        if (data === []) {
            const today = new Date()
            data.push({x: today.toUTCString(), y:0})
        }
        return [{label: 'Grades', data}]

    }

    getAxes = () => {
        return [
            {primary: true, type:'utc', position: 'bottom'},
            {type: 'linear', position: 'left', min: 0, max: 100}
        ]

    }

    getSeries = () => {
        return {
            type: 'bubble',
            showPoints: false
          }
            
    }


    render() {
        if (!this.props.current || !this.props.current.course) {
            return (<div>
                <h1 className="mx-auto my-3" style={{textAlign:'center', color:'var(--gray'}}>uwu! There's nothing here !</h1>
            </div>)
        }
        return (
            <div className="p-3">
                <h4>Average over time</h4>
                <hr/>
                <div className="mt-5 p-2" style={{width: '100%', height: '500px'}}>
                <Chart data={this.getData()} series={this.getSeries()} axes={this.getAxes()} grouping="single" tooltip/>
                </div>
            </div>
          )
    }
}

export default StatisticsPanel
