import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

export default class ObjectList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            objects: props.objects,
            appProps: props.appProps
        };

        this.buildRows = this.buildRows.bind(this);
    }

    buildRows() {
        return this.props.objects.map((object, k) =>
            <tr key={k}>
                <th>{object.id}</th>
                <td>{object.name}</td>
                <td>{object.code}</td>
                <td>
                    <Button color="primary" onClick={() => this.props.onDelete(object.id)}>Delete</Button>
                </td>
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
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {this.buildRows()}
                </tbody>
            </Table>
        )
    }
}