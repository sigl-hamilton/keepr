import React, { Component } from 'react';
import Select from "../Components/Atomic/Select";
import axios from "axios";
import axiosURL from "../axios-config";
import LogChart from "../Components/Containers/LogChart";

export default class LogsChartPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logs: [],
            possibleOwners: [],
            owner: {id: -1}
        };

        this.setOwner = this.setOwner.bind(this);
        this.filterRefineLogs = this.filterRefineLogs.bind(this);
    }

    setOwner(newOwnerName) {
        if (newOwnerName === "All")
            this.setState({owner: {id: -1}});
        else {
            let foundOwner = null;
            this.state.possibleOwners.forEach((user) => {
                if (user.name === newOwnerName)
                    foundOwner = user;
            });
            if (foundOwner == null)
                this.setState({owner: {id: -1}});
            else
                this.setState({owner: foundOwner});
        }
    }

    componentDidMount() {
        axios.get(axiosURL('user'))
            .then(response => {
                this.setState({
                    possibleOwners: response.data
                });
            })
            .catch(function (error){
                console.error("Error: " + error.toString());
            });

        axios.get(axiosURL('log'))
            .then(response => {
                this.setState({
                    logs: response.data
                });
            })
            .catch(function (error){
                console.error("Error: " + error.toString());
            });
    }

    filterRefineLogs() {
        let filteredLogs = [];
        this.state.logs.forEach((log) => {
            if (this.state.owner.id === -1 || this.state.owner.id === log.user_id)
                filteredLogs.push(log);
        });
        return filteredLogs;
    }

    buildSelectOptions() {
        let options = ["All"];
        this.state.possibleOwners.forEach((user) => {
            options.push(user.name);
        });
        return options;
    }

    render() {
        return (
            <div>
                <Select
                    id="test-select"
                    options={this.buildSelectOptions()}
                    enabled={true}
                    onChange={e => this.setOwner(e.target.value)}
                />
                <LogChart logs={this.filterRefineLogs()} users={this.state.possibleOwners}/>
            </div>
        )
    }
}