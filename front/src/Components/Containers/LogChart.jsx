import React, { Component } from 'react';
import Chart from "react-google-charts";

export default class LogChart extends Component {
    constructor(props) {
        super(props);

        const data = [
            ["Time", "Sales", "Expenses"],
            ["2004", 1000, 400],
            ["2005", 1170, 460],
            ["2006", 660, 1120],
            ["2007", 1030, 540]
        ];

        this.state = {
            logs: props.logs,
            appProps: props.appProps
        };

        this.buildData = this.buildData.bind(this);
    }

    buildData() {
        if (this.props.logs === null || this.props.users === null)
            return [["Time", "All users"]];
        else {
            let ret = [["Time", "All users"]];
            let currentAccu = ["", 0];

            this.props.users.forEach((user) => {
                currentAccu.push(0);
                ret[0].push(user.name);
            });

            this.props.logs.forEach((log) => {
                // Finding the user of the log and adding a log to its column
                let found = false;
                for (let i = 0; i < this.props.users.length ; i++) {
                    if (this.props.users[i].id === log.user_id) {
                        found = true;
                        currentAccu[1] += 1;
                        currentAccu[i+2] += 1
                    }
                }
                // If the user has not been found, still add 1 to the sum of all logs
                if (!found)
                    currentAccu[1] += 1;

                // Setting the date of the currentAccu
                currentAccu[0] = new Date(log.createdAt);

                let currentAccuCopy = [];
                currentAccu.forEach(e => {currentAccuCopy.push(e)});
                ret.push(currentAccuCopy);
            });

            console.log(ret);
            return ret;
        }
    }

    render() {
        const style = {
            title: "KeepR activity",
            legend: { position: "bottom" }
        };

        return (
            <div className="App">
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={this.buildData()}
                    options={style}
                />
            </div>
        );
    }
}