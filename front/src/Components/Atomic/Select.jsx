import React, { Component } from 'react';

import {Input, Label} from "reactstrap";

export default class Select extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: props.users,
            enabled: (props.users && props.users.length > 0) && props.enabled,
            currentUser: (props.users && props.users.length > 0) ? props.users[0] : null,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        //const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    buildSelect() {
        return this.state.users.map((user, k) =>
            <option key={k}>{user.id}</option>
        )
    }

    render() {
        if (this.state.enabled) {
            const id = this.props.id;
            const label = this.props.label;
            const options = this.buildSelect();

            return (
                <div>
                    <Label for="exampleSelect">{label}</Label>
                    <Input type="select" id={id}>
                        {options}
                    </Input>
                </div>
            );
        }
        return <div />
    }
}