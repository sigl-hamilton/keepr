import React, { Component } from 'react';
import axios from 'axios';

import {Alert, Button} from "reactstrap";
import axiosURL from "../../axios-config";

export default class ObjectAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            objectName: '',
            objectCode: '',
            objectAdded: null,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.props.appProps.authenticatedUser === null) {
            console.error("Cannot add because not logged in!");
        }
        else {
            const newObject = {
                name: this.state.objectName,
                code: this.state.objectCode,
                userId: this.props.appProps.authenticatedUser.id
            };

            axios.post( axiosURL('registeredObject'), newObject)
                .then(res => this.setState({
                    objectAdded: res.data
                }));
        }


        this.setState({
            objectName: '',
            objectCode: ''
        })
    }

    contidionnalSuccess() {
        if (this.state.objectAdded != null)
            return (
                <Alert color="success">
                    The object "{this.state.objectAdded.name}" has been added!
                </Alert>
            );
        return null;
    }

    render() {
        return (
            <div>
                {this.contidionnalSuccess()}
                <h3>Manually add an object</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text"
                            name="objectName"
                            className="form-control"
                            value={this.state.objectName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Code: </label>
                        <input
                            type="text"
                            name="objectCode"
                            className="form-control"
                            value={this.state.objectCode}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <Button color="primary" onClick={this.onSubmit}>Create</Button>
                    </div>
                </form>
            </div>
        )
    }
}