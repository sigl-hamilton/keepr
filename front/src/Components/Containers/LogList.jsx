import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class LogList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logs: props.logs,
            appProps: props.appProps
        };

        this.buildRows = this.buildRows.bind(this);
    }

    buildRows() {
        return this.props.logs.map((log, k) =>
            <tr key={k}>
                <th>{log.id}</th>
                <td>{log.method}</td>
                <td>{log.model}</td>
                <td>{log.user_id}</td>
                <td>{log.comment}</td>
                <td>{log.createdAt}</td>
            </tr>
        )
    }

    render() {
        return (
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Method</th>
                    <th>Model</th>
                    <th>Concerned user id</th>
                    <th>Comment</th>
                    <th>Created at</th>
                </tr>
                </thead>
                <tbody>
                {this.buildRows()}
                </tbody>
            </Table>
        )
    }
}