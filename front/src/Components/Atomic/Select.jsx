import React, { Component } from 'react';

import {Input, Label} from "reactstrap";

export default class Select extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: props.options,
            enabled: (props.options && props.options.length > 0) && props.enabled,
            currentOption: (props.options && props.options.length > 0) ? props.options[0] : null,
            onChange: props.onChange
        };

        this.buildSelect = this.buildSelect.bind(this);
    }

    buildSelect() {
        return this.state.options.map((option, k) =>
            <option key={k}>{option}</option>
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
                    <Input type="select" id={id} onChange={this.state.onChange}>
                        {options}
                    </Input>
                </div>
            );
        }
        return <div />
    }
}