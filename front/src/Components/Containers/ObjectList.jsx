import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

export default class ObjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objects: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/registeredObject')
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