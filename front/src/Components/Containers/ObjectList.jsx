import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import axiosURL from "../../axios-config";

export default class ObjectList extends Component {
    constructor(props) {
        super(props);

        console.log("constructor");
        console.log(props.appProps);
        console.log("end of constructor");

        this.state = {
            objects: [],
            appProps: props.appProps
        };
    }

    componentDidMount() {
        axios.get(axiosURL('registeredObject'))
            .then(response => {
                this.setState({
                    objects: response.data
                });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    buildRows() {
        return this.state.objects.map((object, k) =>
            <tr key={k}>
                <th>{object.id}</th>
                <td>{object.name}</td>
                <td>{object.code}</td>
            </tr>
        )
    }

    render() {
        console.log(this.state.appProps);
        return (
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Code</th>
                </tr>
                </thead>
                <tbody>
                {this.buildRows()}
                </tbody>
            </Table>
        )
    }
}