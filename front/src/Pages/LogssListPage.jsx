import React, { Component } from 'react';
import LogList from "../Components/Containers/LogList";
import Select from "../Components/Atomic/Select";
import axios from "axios";
import axiosURL from "../axios-config";

export default class LogsListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logs: [],
            owner: -1
        };

        this.setOwner = this.setOwner.bind(this);
        this.filterLogs = this.filterLogs.bind(this);
    }

    setOwner(newOwner) {
        console.log(newOwner);
        if (newOwner === "All")
            this.setState({owner: -1});
        else
            this.setState({owner: parseInt(newOwner)});
    }

    componentDidMount() {
        axios.get(axiosURL('log'))
            .then(response => {
                this.setState({
                    logs: response.data
                });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    filterLogs() {
        console.log(this.state);
        let filteredLogs = [];
        this.state.logs.forEach((log) => {
            if (this.state.owner === -1 || this.state.owner === log.user_id)
                filteredLogs.push(log);
        });
        console.log(filteredLogs);
        return filteredLogs;
    }

    render() {
        console.log("Render page");
        return (
            <div>
                <Select
                    id="test-select"
                    options={["All", "2", "3"]}
                    enabled={true}
                    onChange={e => this.setOwner(e.target.value)}
                />
                <LogList logs={this.filterLogs()}/>
            </div>
        )
    }
}