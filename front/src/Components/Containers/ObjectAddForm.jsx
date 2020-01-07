import React, { Component } from 'react';
import axios from 'axios';

import {Button} from "reactstrap";
import axiosURL from "../../axios-config";

export default class ObjectAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            objectName: '',
            objectCode: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        //const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Object name: ${this.state.objectName}`);
        console.log(`Object code: ${this.state.objectCode}`);

        const newObject = {
            name: this.state.objectName,
            code: this.state.objectCode
        };

        axios.post( axiosURL('registeredObject'), newObject)
            .then(res => console.log(res.data));

        this.setState({
            objectName: '',
            objectCode: ''
        })
    }

    render() {
        return (
            <div>
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
                        <label>Responsible: </label>
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